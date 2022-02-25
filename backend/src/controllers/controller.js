const bcrypt = require('bcryptjs')
const pool = require('../../db');
const queries = require('../queries/queries')
const Pool = require('pg').Pool;
const nodemailer = require('nodemailer');

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
                res.status(409).json({error:"Email Already exists"});
                
            }else{
                pool.query(queries.addClient, 
                    [firstname,lastname, cell_no,email, passwordHash],
                    (error,results)=>{
                    if(error){ 
                        res.status(500).json({error: 'invalid input'})
                        throw error;
                    }else{
                        addUserMailer(email,firstname,lastname);
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
            res.status(404).json("User does not exist in the database.");
        }else{
            pool.query(queries.removeClient,[id],(error, results)=>{
                if(error) throw error;
                res.status(200).json("user removed successfully");
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
            res.status(404).json({error:"email does not exist in the database"});
        }else{
               console.log(password);
               console.log(results.rows[0].password)
        pool.query(queries.getClientPasswordByEmail,[email],(error,results)=>{
            console.log(results.rows[0].password);
            const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
            console.log(queryPassword)
            if(!queryPassword){
                res.status(404).json({error:"Invalid password or email"});
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
    const { dr_name, occupation, experience, company, cell_no, email, password,picture} = req.body;
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
                    [dr_name, occupation, experience, company, cell_no, email, passwordHash,picture],
                    (error,results)=>{
                    if(error){ 
                        res.status(409).json({error:'bad response '})
                        throw error;
                    }else{
                        addDoctorMailer([email],[dr_name], [password]);
                        res.status(201).json("Account registered successfully");
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
            res.status(404).json({error:"email does not exist in the database"});
        }else{
               console.log(password);
        pool.query(queries.getDoctorPasswordByEmail,[email],(error,results)=>{
            console.log(results.rows[0]);
            const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
            if(!queryPassword){
                res.status(404).json({error:"Invalid password or email"});
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

    const pet_name = req.params.id;
    console.log(req.params.id)
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


const getAvailAppointByDrId = async (req,res)=>{

    const dr_id = parseInt(req.params.id);
    console.log("i have been called");

    
    pool.query(queries.getAvailableAppointments,[dr_id],(error,results)=>{

        console.log(dr_id)
        if(!results.rows){
            res.status(404).json({error:"Not found"});
        }else{
            res.status(200).json(results.rows);
        }
    })
}


const getBookedAppointmentsBydrId= async (req,res)=>{
    const dr_id = parseInt(req.params.dr_id);
    pool.query(queries.getBookedAppointmentsByDrId,[dr_id],(error,results)=>{
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
            res.status(201).json("appointment created successfully");
        }
    });
    
}

const cancelAppointment= async (req,res)=>{
    const id = parseInt(req.params.id);
    const {pet_name } = "";
    const {user_id } = "";
    pool.query(queries.cancelAppointment,[pet_name,user_id,id],(error,results)=>{
        if(error){ 
            console.status(404).json({error:'bad response '})
            throw error;
        }else{
            mailer('ntsakokhozacc@gmail.com')
            res.status(201).json("appointment cancelled");
        }
    });
}

const getClientAppointmentsById= async (req,res)=>{
    const user_id = parseInt(req.params.id);
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
const Transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user:'ntsakokhozacc@gmail.com',
        pass:'pdthgosbwikeapvz'
    },
    tls:{
        rejectUnauthorized:false
      }
});

const mailer = async (email)=>{
    let mailOptions = {
        from: 'ntsakokhozacc@gmail.com', // sender address
        to: email, // list of receivers
        //cc:'etlhako@gmail.com',
        subject: 'Appointment cancellation', // Subject line
        // text: text, // plain text body
        html:   `<h2>Greetings Mr khoza</h1><br><h4>Your appointment has been cancelled ☹️ ${email}</h4>`
        // html body
    };
    Transporter.sendMail(mailOptions,function(err,data){
      if(err){
          console.log(err);
      }
    });
   
}

const addUserMailer = async (email,firstname,lastname)=>{
    let mailOptions = {
        from: 'ntsakokhozacc@gmail.com', // sender address
        to: email, // list of receivers
        //cc:'etlhako@gmail.com',
        subject: 'Account successfully registered', // Subject line
        // text: text, // plain text body
        html:   `<h2>Greetings ${firstname} ${lastname},</h2><br>
        <h1><center>🐶🐱🐭🐹🐰🐵🐔🐸🐴🦅🦜🐧🦮  </center></h1><br>
        <h3>Thank you for joining the VET APP 😊<br>
        You can now access our varied array of vetinary services all at convience of your finger tips.🙂</h3><br>
        visit our sight at <a href="http://localhost:4200/">Visit vetapp.co.za!</a>`
        // html body
    };
    Transporter.sendMail(mailOptions,function(err,data){
      if(err){
          console.log(err);
      }
    });
   
}



const addDoctorMailer = async (email,dr_name, password)=>{
    let mailOptions = {
        from: 'ntsakokhozacc@gmail.com', // sender address
        to: email, // list of receivers
        //cc:'etlhako@gmail.com',
        subject: 'Account successfully registered', // Subject line
        // text: text, // plain text body
        html:   `<h3>Greetings ${dr_name},</h3><br>
        <h1><center>🐶🐱🐭🐹🐰🐵🐔🐸🐴🦅🦜🐧🦮  </center></h1><br>
        <h3>This email serves to inform you that your account is now active😊, <br>
        We're very excited about our new partnership, and we just want to thank 
        you for being a part of our extended family.<br>
        We look forward to a long and fruitful relationship between our entities.🙂
        Below are your login credentials you, your password can be updated at your own discretion on our platform:</h3><br>
        <h2><ul><u>Login Details</u><h2/>
        Username: ${email}<br>
        password: ${password}<br>
        visit our sight at <a href="http://localhost:4200/login">Visit vetapp.co.za!</a><br><br>
        </ul><h3>
        kind Regards,<br>
         PetAPP Team
         </h3>`
        // html body
    };
    Transporter.sendMail(mailOptions,function(err,data){
      if(err){
          console.log(err);
      }
    });
   
}

const newAppointment = async (req,res) => {
    const {dr_id,appoint_date,time_slot} = req.body;
    console.log(dr_id)
    console.log(appoint_date)
    console.log(time_slot)
    pool.query(queries.newAppointment, [dr_id,appoint_date,time_slot],(error,results)=>{
        if(error){ 
            res.status(500).json({error: 'invalid input'})
            // throw error;
        }else{

            res.status(201).json("New availability slot created successfully");
        }
    });
    
}

const removeAppointment = async (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.removeAppointment,[id],(error, results)=>{
        // const result = !results.rows.length;
        if(error){
            res.status(404).json({error:"Appointment does not exist in the database."});
            throw error;
        }else{
            res.status(200).json("appointment successfully removed");
        }
    });
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
    getBookedAppointmentsBydrId,
    makeAppointment,
    cancelAppointment,
    getClientAppointmentsById,
    newAppointment,
    removeAppointment,
};
