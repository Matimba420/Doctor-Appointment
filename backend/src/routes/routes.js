const {Router} = require('express');
const { get } = require('express/lib/response');
const controller = require('../controllers/controller')

const router = Router();

router.get('client/',controller.getClients);
router.post('client/',controller.addClient);
router.get('client/:id',controller.geClientById);
router.delete('client/:id',controller.removeClient);
router.put('client/:id',controller.updateClient);

router.post('client/login',controller.clientLogin)

// router.get('doctor/',controller.getDoctors);
// router.post("doctor/",controller.addDoctor);
// router.get('doctor/:id', controller.getDoctorById);
// router.delete('doctor/:id',controller.removeDoctorById);
// router.put('doctor/:id',controller.updateDoctor);




module.exports= router;