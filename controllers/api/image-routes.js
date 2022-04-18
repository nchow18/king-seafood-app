const router = require('express').Router();
const imageUploadPath = '../../public/products';
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    // cb(null, `${Date.now()}_${file.originalname}`)
    cb(null, `${file.originalname}`)    
  }
})

const imageUpload = multer({storage: storage})

router.post('/', imageUpload.array("my-image-file"), (req, res) => {
  console.log('POST request received to /image-upload.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /image-upload.');
})

module.exports = router;