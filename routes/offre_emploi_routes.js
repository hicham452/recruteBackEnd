const offreEmploiController = require('../controllers/offre_emploi_controller');
const express = require('express');
const multer = require('multer')
const router = express.Router();

const fileStorageEngine = multer.diskStorage({

    destination : (res,file, cb)=> {
  
        cb(null,'./upload');
  
    },
    filename : (req,file,cb)=> {
  
        cb(null,Date.now()+'_'+file.originalname)
  
    }
  
  })

  const upload = multer({storage : fileStorageEngine})
router.get('/',offreEmploiController.getAllOffreEmploi);
router.get('/:id',offreEmploiController.getOfferEmploiByID);
router.post('/',upload.single('file'),offreEmploiController.createOffreEmploi);
router.put('/:id',offreEmploiController.updateOffreEmploi);
router.delete('/:id',offreEmploiController.deleteOffreEmploi);

module.exports = router;
