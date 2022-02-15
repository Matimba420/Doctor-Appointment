const bcrypt = require('bcryptjs')
const pool = require('../../db');
const queries = require('../queries/queries')
const Pool = require('pg').Pool;

const getClients = (req, res) => {
    pool.query(queries.getClients,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows)
    });
};

const geClientById=(req,res) =>{
    const id =parseInt(req.params.id);


    pool.query(queries.getClientById,[id],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
        if(!results.rows.length){ 
            res.status(404).send('user not found')
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};


const addClient = async (req,res) => {
    const {firstname, lastname, cell_no, email, password} = req.body;
    if( toString(password).length<8){
        res.status(400).json('Your Password should be longer than 7 characters');
    }else{

        const salt=await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        //check if email exists
        pool.query(queries.checkClientEmailExists, [email], (error, results) => {
            
            if (results.rows.length){
                res.status(409).json({error:"Invalid email or password"});
                
            }else{
                pool.query(queries.addClient, 
                    [firstname,lastname, cell_no,email, passwordHash],
                    (error,results)=>{
                    if(error){ 
                        res.status(500).json({error: 'invalid input'})
                        throw error;
                    }else{
                        res.status(201).json("User created successfully");
                    }
                });
            }
        });
    
    }
}

const removeClient = (req, res) =>{
    const id =parseInt(req.params.id);

    pool.query(queries.getClientById,[id],(error, results)=>{
        const noUserfound = !results.rows.length;
        if(noUserfound){
            res.send("User does not exist in the database.");
        }else{
            pool.query(queries.removeClient,[id],(error, results)=>{
                if(error) throw error;
                res.status(200).send("user removed successfully");
        });
        }
    });
}


const updateClient = async (req,res) =>{
    const id = parseInt(req.params.id);
    const {cell_no } = req.body;
    const {password} = req.body

    
    //this.passwordValidator(password);
    if(password.length<8){
        res.status(400).send('Your Password should be longer than 7 characters');
    }else{
        const salt=await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        pool.query(queries.getClientById,[id],(error, results)=>{
            const noUserfound = !results.rows.length;
            if(noUserfound){
                res.send("User does not exist in the database.");
            }else{
            
    
            pool.query(queries.updateClient,[cell_no, passwordHash,id],(error,results) =>{
                if (error) throw error;
                res.status(200).send("User updated successfully")
            });
            }
        });
    }    
}

const clientLogin =async (req,res) =>{
    const {email} = req.body;
    const {password} = req.body;
    
   
    
    
    pool.query(queries.checkClientEmailExists, [email], (error, results) => {
        if (!results.rows.length){
            res.status(404).send("email does not exist in the database");
        }else{

        pool.query(queries.getClientPasswordByEmail,[email],(error,results)=>{
            const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
            if(!queryPassword){
                res.send("Invalid password");
            }else{
                res.status(200).json(results.rows);
                console.log(queryPassword)
            }
            
            //console.log(results)
        });  
    }
    })    
}

const activateClient = async (req, res)=>{
    const id = parseInt(req.params.id);
    const {is_active } = req.body;
    pool.query(queries.activateClient,[is_active,id],(error,results) =>{
        if (error) throw error;
        res.status(200).send("User updated successfully")
    });
}


// ------------------------------------doctor----------------------------------------------
const getDoctors = (req, res) => {
    pool.query(queries.getDoctors,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows)
    });
};

const getDoctorById=(req,res) =>{
    const id =parseInt(req.params.id);


    pool.query(queries.getDoctorById,[id],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
        if(!results.rows.length){ 
            res.status(404).send('user not found')
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};

const addDoctor = async (req,res) => {
    const { dr_name, occupation, experience, company, cell_no, email, password} = req.body;
    if(toString(password).length<8){
        res.status(400).send('Your Password should be longer than 7 characters');
    }else{

        const salt=await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        //check if email exists
        pool.query(queries.checkDoctorEmailExists, [email], (error, results) => {
            
            if (results.rows.length){
                res.send("email already exists");
                
            }else{
                pool.query(queries.addDoctor, 
                    [dr_name, occupation, experience, company, cell_no, email, password],
                    (error,results)=>{
                    if(error){ 
                        console.log('bad response ')
                        throw error;
                    }else{
                        res.status(201).send("User created successfully");
                    }
                });
            }
        });
    
    }
}

const removeDoctor= (req, res) =>{
    const id =parseInt(req.params.id);

    pool.query(queries.getDoctorById,[id],(error, results)=>{
        const noUserfound = !results.rows.length;
        if(noUserfound){
            res.send("User does not exist in the database.");
        }else{
            pool.query(queries.removeDoctor,[id],(error, results)=>{
                if(error) throw error;
                res.status(200).send("user removed successfully");
        });
        }
    });
}

const updateDoctor = async (req,res) =>{
    const id = parseInt(req.params.id);
    const {cell_no } = req.body;
    const {password} = req.body

    
    //this.passwordValidator(password);
    if(password.length<8){
        res.status(400).send('Your Password should be longer than 7 characters');
    }else{
        const salt=await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        pool.query(queries.getDoctorById,[id],(error, results)=>{
            const noUserfound = !results.rows.length;
            if(noUserfound){
                res.send("User does not exist in the database.");
            }else{
            
    
            pool.query(queries.updateDoctor,[cell_no, passwordHash,id],(error,results) =>{
                if (error) throw error;
                res.status(200).send("User updated successfully")
            });
            }
        });
    }    
}

const doctorLogin =async (req,res) =>{
    const {email} = req.body;
    const {password} = req.body;
   
    
    
    pool.query(queries.checkDoctorEmailExists, [email], (error, results) => {
        if (!results.rows.length){
            res.status(404).send("email does not exist in the database");
        }else{

        pool.query(queries.getDoctorPasswordByEmail,[email],(error,results)=>{
            const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
            if(!queryPassword){
                res.send("Invalid password");
            }else{
                res.status(200).json(results.rows);
                console.log(queryPassword)
            }
            
            //console.log(results)
        });  
    }
    }) 
}


const activateDoctor = async (req, res)=>{
    const id = parseInt(req.params.id);
    const {is_active } = req.body;
    pool.query(queries.activateDoctor,[is_active,id],(error,results) =>{
        if (error) throw error;
        res.status(200).send("Status updated successfully")
    });
}

// ------------------------------------pets----------------------------------------------

const getPets = (req, res) => {
    pool.query(queries.getPets,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows)
    });
};

const getPetById = (req, res)=>{
    const id =parseInt(req.params.id);


    pool.query(queries.getPetById,[id],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
        if(!results.rows.length){ 
            res.status(404).send('pet not found')
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
}

const getPetAndDocInfo=(req,res)=>{

    const {pet_name} = req.body
    pool.query(queries.getPetAndDocInfo,[pet_name],(error,results)=>{
        if(!results.rows){
            res.send("Not found");
        }else{
            res.status(200).json(results.rows);
        }
        
        //console.log(results)
    });  
} 

const getAppointments=(req,res)=>{
    pool.query(queries.getAppointments,(error,results)=>{
        if(!results.rows){
            res.send("Not found");
        }else{
            res.status(200).json(results.rows);
        }
    })
}


const getAvailAppointByDrId= async (req,res)=>{
    const dr_id = parseInt(req.params.dr_id);
    pool.query(queries.getAvailableAppointments,[dr_id],(error,results)=>{
        if(!results.rows){
            res.send("Not found");
        }else{
            res.status(200).json(results.rows);
        }
    })
}

const makeAppointment= async (req, res)=>{
    const id = parseInt(req.params.id);
    const {pet_name } = req.body;
    const {user_id } = req.body;
    pool.query(queries.makeAppointment,[pet_name,user_id,id],(error,results)=>{
        if(error){ 
            console.log('bad response ')
            throw error;
        }else{
            res.status(201).send("appointment created successfully");
        }
    });
    
}

const cancelAppointment= async (req,res)=>{
    const id = parseInt(req.params.id);
    const {pet_name } = "";
    const {user_id } = "";
    pool.query(queries.cancelAppointment,[pet_name,user_id,id],(error,results)=>{
        if(error){ 
            console.log('bad response ')
            throw error;
        }else{
            res.status(201).send("appointment cancelled");
        }
    });
}

const getClientAppointments= async (req,res)=>{
    const {user_id } = req.body;
    pool.query(queries.getClientAppointments,[user_id],(error,results)=>{
        if(!results.rows){
            res.send("Not found");
            return error;
        }else{
            console.log('it works')
            res.status(200).json(results.rows);
        }
    })
    


}

    
module.exports ={
    getClients,
    geClientById,
    addClient,
    removeClient,
    updateClient,
    clientLogin,
    activateClient,
    
    getDoctors,
    getDoctorById,
    addDoctor,
    removeDoctor,
    updateDoctor,
    doctorLogin,
    activateDoctor,
    
    getPets,
    getPetById,
    getPetAndDocInfo,
    
    getAppointments,
    getAvailAppointByDrId,
    makeAppointment,
    cancelAppointment,
    getClientAppointments
    
};

