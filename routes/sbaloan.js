const express = require('express')
const router = express.Router()
const multer = require("multer");
// var upload = multer({ dest: "uploads/" });
const shortid = require("shortid");
const path = require("path");
const { businessRegister } = require('../controllers/business')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "uploads2"));
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });

router.post('/businessRegister', upload.array('pic'), businessRegister)


module.exports = router