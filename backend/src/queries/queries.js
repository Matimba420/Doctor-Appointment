const addClient = "INSERT INTO PUBLIC.USER (firstname, lastname, cell_no, email,password) VALUES ($1,$2,$3,$4,$5)";
const getClients = "SELECT * FROM PUBLIC.USER where is_active='true' ORDER BY id ASC";
const getClientById = "SELECT * FROM PUBLIC.USER WHERE id =$1";
const checkClientEmailExists = "SELECT * FROM PUBLIC.USER WHERE email= $1";
const removeClient ="UPDATE PUBLIC.USER SET is_active='false' WHERE id=$1";
const updateClient ="UPDATE PUBLIC.USER SET cell_no=$1, password=$2 WHERE ID = $3";
const clientLogin = "SELECT id, firstname, lastname, cell_no, email FROM PUBLIC.USER WHERE password=$1 AND email=$2";
const getClientPasswordByEmail="SELECT * FROM PUBLIC.USER WHERE email=$1";



const addDOCTOR = "INSERT INTO DOCTOR (dr_name, occupation, experience, company, cell_no, email, password) VALUES ($1,$2,$3,$4,$5,$6,$7)";
const getDoctors = "SELECT id, dr_name, occupation, experience, company, cell_no, email, password where is_active='true' FROM DOCTOR ORDER BY id ASC";
const getDoctorById = "SELECT * FROM DOCTOR WHERE id =$1"
const checkDoctorEmailExists = "SELECT * FROM DOCTOR WHERE email= $1"
const removeDoctor ="UPDATE DOCTOR SET is_active='false' WHERE id=$1";
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