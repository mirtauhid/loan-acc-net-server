const express = require('express')
const router = express.Router()
const multer = require("multer");
// var upload = multer({ dest: "uploads/" });
const shortid = require("shortid");
const path = require("path");
const { sbaLoanRegister } = require('../controllers/sbaloan')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });

router.post('/sbaLoanRegister', upload.array('pic'), sbaLoanRegister)


module.exports = router