
const path = require("path")
const multer = require("multer");
const { send } = require("process");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now()+ Math.round().toString()
      cb(null, `${uniquePrefix}-${file.originalname}`);
    },
  });

  function fileFilter (req, file, cb) {
    if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
        cb(null,true);
    }
    else {
        cb(null,false);
    }
  
  };

  const upload = multer({
      storage,
      fileFilter,
      limits: {
          fileSize: 1024 * 1024 * 6,
      }
  })

//   const uploadSingle = (filekey) => {
//       return function ( req, res, next) {
//           const uploadItem = upload.any(filekey);
//           uploadItem(req, res, function (err) {
//               if(err instanceof multer.MulterError) {
//                   return res.status(500)/send(err.message);
//               }
//               else if (err){
//                   return res.status(500).send(err.message);
//               }
//           })
//       }
//   }

  module.exports = {upload};
  