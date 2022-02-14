const {Router} = require('express');
const controller = require('../controllers/controller')

const router = Router();

router.get('/client/',controller.getClients);
router.post('/client/',controller.addClient);
router.post('/client/login',controller.clientLogin);
router.put('/client/activate/:id',controller.activateClient);
router.get('/client/:id',controller.geClientById);
router.delete('/client/:id',controller.removeClient);
router.put('/client/:id',controller.updateClient);



router.get('/doctor/',controller.getDoctors);
router.post("/doctor/",controller.addDoctor);
router.post('/doctor/login',controller.doctorLogin);
router.put('/doctor/activate/:id',controller.activateDoctor);
router.get('/doctor/:id', controller.getDoctorById);
router.delete('/doctor/:id',controller.removeDoctor);
router.put('/doctor/:id',controller.updateDoctor);


router.get('/pets/', controller.getPets);
router.get('/pets/name',controller.getPetAndDocInfo);
router.get('/pets/:id', controller.getPetById);


router.get('/appointments/', controller.getAppointments);
router.put('/appointments/makeAppointment/:id', controller.makeAppointment);
router.get('/appointments/:dr_id', controller.getAvailAppointByDrId);
router.put('/appointments/cancelAppointment/:id', controller.cancelAppointment)

router.get('/appointments/client/:user_id',controller.getClientAppointments)








module.exports= router;