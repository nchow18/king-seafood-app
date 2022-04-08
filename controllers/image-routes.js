const router = require('express').Router();
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');

const imageUploadPath = 'C:/Users/nc/Desktop/projects/king-seafood-app/public/products';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
  }
})

const imageUpload = multer({storage: storage})

router.post('/', imageUpload.array("my-image-file"), (req, res) => {
  console.log('POST request received to /image-upload.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /image-upload.');
})

module.exports = router;