
//import multer
const multer = require('multer')

//storage-diskstorage- method to create storage

const storage = multer.diskStorage({
 //it has 2 keys. 1st destination and the 2nd is filename
// destination where the file is stored

    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },

    filename:(req,file,callback)=>{
        const filename = `image- ${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
 
})

const fileFilter = (req,file,callback)=>{
    if(file.mimetype==='image/png' || file.mimetype==='image/jpeg' || file.minetype==='image/jpg')
    {
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new error("only png,jpeg,jpg will be allowed"))
    }
}


//2)create multerCongiguration
const multerConfig = multer({
    storage,
    fileFilter
})


//3)export multer

module.exports = multerConfig




