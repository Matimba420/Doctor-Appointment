const addClient = "INSERT INTO PUBLIC.USER (firstname, lastname, cell_no, email,password) VALUES ($1,$2,$3,$4,$5)";
const getClients = "SELECT * FROM PUBLIC.USER where is_active='true' ORDER BY id ASC";
const getClientById = "SELECT * FROM PUBLIC.USER WHERE id =$1";
const checkClientEmailExists = "SELECT * FROM PUBLIC.USER WHERE email= $1 and is_active='true'";
const removeClient ="UPDATE PUBLIC.USER SET is_active='false' WHERE id=$1";
const updateClient ="UPDATE PUBLIC.USER SET cell_no=$1, password=$2 WHERE ID = $3";
const clientLogin = "SELECT id, firstname, lastname, cell_no, email FROM PUBLIC.USER WHERE password=$1 AND email=$2";
const getClientPasswordByEmail="SELECT * FROM PUBLIC.USER WHERE email=$1";
const activateClient="UPDATE PUBLIC.USER SET is_active=$1 WHERE id=$2 "




const addDoctor = "INSERT INTO PUBLIC.DOCTOR (dr_name, occupation, experience, company, cell_no, email, password,picture) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";
const getDoctors = "SELECT * FROM PUBLIC.DOCTOR  where is_active='true'  ORDER BY id ASC";
const getDoctorById = "SELECT * FROM PUBLIC.DOCTOR  WHERE id =$1 and is_active='true'"
const checkDoctorEmailExists = "SELECT * FROM PUBLIC.DOCTOR  WHERE email= $1 and is_active='true'"
const removeDoctor ="UPDATE PUBLIC.DOCTOR  SET is_active='false' WHERE id=$1";
const updateDoctor ="UPDATE PUBLIC.DOCTOR  SET cell_no=$1, password=$2 WHERE ID = $3"
const DoctorLogin = "SELECT id, firstname, lastname, cell_no, email FROM PUBLIC.DOCTOR  WHERE password=$1 AND email=$2";
const getDoctorPasswordByEmail="SELECT * FROM PUBLIC.DOCTOR  WHERE email=$1"
const activateDoctor="UPDATE PUBLIC.DOCTOR SET is_active=$1 WHERE id=$2 ";

const addAdmin="INSERT INTO PUBLIC.ADMIN VALUES (admin_name, admin_surname, email, password)"
const getAdmins = "SELECT * FROM PUBLIC.ADMIN  where is_active='true'  ORDER BY id ASC";
const getAdminById = "SELECT * FROM PUBLIC.ADMIN  WHERE id =$1 and is_active='true'"
const checkAdminEmailExists = "SELECT * FROM PUBLIC.ADMIN  WHERE email= $1 and is_active='true'"
const removeAdmin ="UPDATE PUBLIC.ADMIN  SET is_active='false' WHERE id=$1";
const updateADMIN ="UPDATE PUBLIC.ADMIN  SET password=$2 WHERE ID = $3"






const getPets="SELECT * FROM PUBLIC.PETS ORDER BY pet_name";
const getPetById="SELECT * FROM PUBLIC.PETS WHERE id=$1 ";

const getPetAndDocInfo="select dr_name, cell_no,email, occupation,fee, experience, pet_name,doctor.id,doctor.picture from pets, doctor where department=occupation and is_active='true' and pets.id=(select pets.id where pet_name = $1)";


const getAppointments ="SELECT * FROM APPOINTMENT,DOCTOR,PUBLIC.USER,PETS WHERE APPOINTMENT.dr_id=DOCTOR.id and APPOINTMENT.user_id=public.USER.id and APPOINTMENT.pet_id=PETS.ID ";


const getAvailableAppointments="SELECT APPOINTMENT.id,APPOINTMENT.time_slot,APPOINTMENT.appoint_date,APPOINTMENT.is_available,cell_no,email,experience,is_active,picture FROM APPOINTMENT, DOCTOR WHERE dr_id=$1 and doctor.id=$1 and is_available=true and appoint_date>= CURRENT_DATE ";

// APPOINTMENT.appoint_date: "2022-02-27T22:00:00.000Z"
// cell_no: "0123456789"
// company: "DA Veterinary Clinic"
// dr_id: 1
// dr_name: "Dr Khan"
// email: "drkhan@gmail.com"
// experience: 7
// APPOINTMENT.id: 1
// is_active: true
// APPOINTMENT.is_available: true
// occupation: "Companion Veterinarian"
// password: "$2a$10$HRm4wb7dTeaQlO65JzuqN.eP9sE62Cggma/VpKw4ic4Inmkwp32me"
// APPOINTMENT.pet_id: null
// picture: "https://i.ibb.co/31VxS11/Doctor-man-sitting-at-the-desk-at-his-working-place-and-smiling-at-camera-Perfect-medical-service-in.jpg"
// APPOINTMENT.time_slot: "11:00-12:00"
// user_id: null


const getBookedAppointmentsByDrId="SELECT firstname, lastname, appoint_date, time_slot, pet_name FROM pets, appointment, public.user WHERE public.user.id=user_id AND pets.id=pet_id AND appoint_date>=current_date AND is_available='false' AND dr_id=$1 ORDER BY appoint_date, time_slot ASC";
const makeAppointment = "UPDATE APPOINTMENT SET pet_id=(select id from PUBLIC.PETS where pet_name=$1), user_id=$2, is_available =false where id=$3";
const cancelAppointment = "UPDATE APPOINTMENT SET pet_id=(select id from PUBLIC.PETS where pet_name=$1), user_id=$2, is_available =true where id=$3";
const getClientAppointments="SELECT APPOINTMENT.appoint_date,APPOINTMENT.dr_id,APPOINTMENT.id,APPOINTMENT.is_available,APPOINTMENT.pet_id,APPOINTMENT.time_slot,APPOINTMENT.user_id,DOCTOR.dr_name,DOCTOR.email,PETS.pet_name FROM PUBLIC.APPOINTMENT,PUBLIC.DOCTOR,PUBLIC.PETS where user_id=$1 AND dr_id=DOCTOR.id AND APPOINTMENT.pet_id=PETS.id";

const newAppointment="INSERT INTO APPOINTMENT(dr_id,appoint_date,time_slot, is_available) VALUES($1,$2,$3,'true') ";
const removeAppointment= "UPDATE APPOINTMENT SET is_available='false' WHERE id=$1"


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

    getClientAppointments,
    getAppointments,
    getAvailableAppointments,
    makeAppointment,
    cancelAppointment,
   
    getBookedAppointmentsByDrId,
    newAppointment,
    removeAppointment,

};