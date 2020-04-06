var express = require("express");
var router = express.Router();
var multer = require("multer");

/* import controller method */
const { create, list, read, update, remove } = require("../controllers/course");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post("/course", upload.single("file"), create);
router.get("/courses", list);
router.get("/course/:id", read);
router.put("/course/:id", update);
router.delete("/course/:id", remove);

module.exports = router;
//////////////////////////////////
//////////////////////////////////
// bellow code is required if we want to save images in server folder
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '/public/uploads')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// });

//var upload = multer({storage: storage});

// in our case we want to persist the image data into database wo we use memoryStorage()
