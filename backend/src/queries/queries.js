const addClient = "INSERT INTO USER (firstname, lastname, cell_no, email,password) VALUES ($1,$2,$3,$4,$5)";
const getClients = "SELECT * FROM USER ORDER BY id ASC";
const getClientById = "SELECT * FROM USER WHERE id =$1";
const checkClientEmailExists = "SELECT * FROM USER WHERE email= $1";
const removeClient ="DELETE FROM USER WHERE id=$1";
const updateClient ="UPDATE USER SET cell_no=$1, password=$2 WHERE ID = $3";
const clientLogin = "SELECT id, firstname, lastname, cell_no, email FROM USER WHERE password=$1 AND email=$2";
const getClientPasswordByEmail="SELECT * FROM USER WHERE email=$1";



const addDOCTOR = "INSERT INTO DOCTOR (dr_name, occupation, experience, company, cell_no, email, password) VALUES ($1,$2,$3,$4,$5,$6,$7)";
const getDoctors = "SELECT id, dr_name, occupation, experience, company, cell_no, email, password FROM DOCTOR ORDER BY id ASC";
const getDoctorById = "SELECT * FROM DOCTOR WHERE id =$1"
const checkDoctorEmailExists = "SELECT * FROM DOCTOR WHERE email= $1"
const removeDoctor ="DELETE FROM DOCTOR WHERE id=$1";
const updateDoctor ="UPDATE DOCTOR SET cell_no=$1, password=$2 WHERE ID = $3"
const DoctorLogin = "SELECT id, firstname, lastname, cell_no, email FROM DOCTOR WHERE password=$1 AND email=$2";
const getDoctorPasswordByEmail="SELECT * FROM DOCTOR WHERE email=$1"



module.exports = {
    //user queries
    addClient,
    getClients,
    getClientById,
    checkClientEmailExists,
    removeClient,
    updateClient,
    clientLogin,
    getClientPasswordByEmail,
    
    
    addDOCTOR ,
    getDoctors,
    getDoctorById,
    checkDoctorEmailExists,
    removeDoctor,
    updateDoctor,
    DoctorLogin,
    getDoctorPasswordByEmail

};