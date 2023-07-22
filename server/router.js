const adminController = require('./controller/adminController')
const userController = require('./controller/userController')

const router = require('express').Router()


const multer = require('multer')
const path = require('path')




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname +
          ' ' +
          Date.now() +
          'myimg' +
          path.extname(file.originalname)
      )
    },
  })
  
  const maxSize = 1 * 1024 * 1024
  
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpeg'
      ) {
        cb(null, true)
      } else {
        cb(null, false)
        return cb(new Error('Only jpg,png and jpeg type are allowed'))
      }
    },
    limits: maxSize,
  })


//Admin Routes

router.post('/adminregister',adminController.adminRegister)
router.post('/adminlogin',adminController.adminLogin)
router.get('/viewblogrequest',adminController.viewBlogRequest)
router.post('/acceptrequest/:id',adminController.acceptReq)
router.post('/rejectrequest/:id',adminController.rejectReq)


//User Routes



router.post('/userregister',upload.single('picture'),userController.userRegister)
router.post('/userlogin',userController.userLogin)
router.post('/postblog/:id',userController.postBlog)
router.get('/viewblogbyuser',userController.viewBlogByUser)
router.get('/loadblog/:blogid',userController.loadParticularBlog)
router.put('/updateblog/:blogid',userController.updateBlog)

module.exports = router