const addClient = "INSERT INTO PUBLIC.USER (firstname, lastname, cell_no, email,password) VALUES ($1,$2,$3,$4,$5)";
const getClients = "SELECT * FROM PUBLIC.USER where is_active='true' ORDER BY id ASC";
const getClientById = "SELECT * FROM PUBLIC.USER WHERE id =$1";
const checkClientEmailExists = "SELECT * FROM PUBLIC.USER WHERE email= $1";
const removeClient ="UPDATE PUBLIC.USER SET is_active='false' WHERE id=$1";
const updateClient ="UPDATE PUBLIC.USER SET cell_no=$1, password=$2 WHERE ID = $3";
const clientLogin = "SELECT id, firstname, lastname, cell_no, email FROM PUBLIC.USER WHERE password=$1 AND email=$2";
const getClientPasswordByEmail="SELECT * FROM PUBLIC.USER WHERE email=$1";
const activateClient="UPDATE PUBLIC.USER SET is_active=$1 WHERE id=$2 "




const addDoctor = "INSERT INTO PUBLIC.DOCTOR (dr_name, occupation, experience, company, cell_no, email, password) VALUES ($1,$2,$3,$4,$5,$6,$7)";
const getDoctors = "SELECT * FROM PUBLIC.DOCTOR  where is_active='true'  ORDER BY id ASC";
const getDoctorById = "SELECT * FROM PUBLIC.DOCTOR  WHERE id =$1 and is_active='true'"
const checkDoctorEmailExists = "SELECT * FROM PUBLIC.DOCTOR  WHERE email= $1"
const removeDoctor ="UPDATE PUBLIC.DOCTOR  SET is_active='false' WHERE id=$1";
const updateDoctor ="UPDATE PUBLIC.DOCTOR  SET cell_no=$1, password=$2 WHERE ID = $3"
const DoctorLogin = "SELECT id, firstname, lastname, cell_no, email FROM PUBLIC.DOCTOR  WHERE password=$1 AND email=$2";
const getDoctorPasswordByEmail="SELECT * FROM PUBLIC.DOCTOR  WHERE email=$1"
const activateDoctor="UPDATE PUBLIC.DOCTOR SET is_active=$1 WHERE id=$2 ";


const getPets="SELECT * FROM PUBLIC.PETS";
const getPetById="SELECT * FROM PUBLIC.PETS WHERE id=$1 ";

const getPetAndDocInfo="select dr_name, cell_no,email, occupation,fee, experience, pet_name from pets, doctor where department=occupation and is_active='true' and pets.id=(select pets.id where pet_name = $1)";


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
    activateClient,
    
    
    addDoctor ,
    getDoctors,
    getDoctorById,
    checkDoctorEmailExists,
    removeDoctor,
    updateDoctor,
    DoctorLogin,
    getDoctorPasswordByEmail,
    activateDoctor,


    getPets,
    getPetById,
    getPetAndDocInfo,

};