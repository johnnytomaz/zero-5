const multer = require('multer');
module.exports = (multer(
    {
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, './public/upload/imagePerfume')
            },
            filename: (req, file, cb) => {
                cb(null, '' + file.originalname)
            }
        }),
        filefilter: (req, file, cb) => {
            const extensaoImage = ['image/pmg', 'image/jpeg', 'image/jpg'].find(
                formatoAceito => formatoAceito == file.mimetype
            );
            if (extensaoImage) {
                return cb(null, true);
            } else {
                return cb(null, false);
            }
        }
    }
));   