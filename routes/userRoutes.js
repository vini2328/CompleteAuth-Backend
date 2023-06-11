import express from 'express'
const  router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middleware/auth-middleware.js';

// routlevel middleware - to protect route
router.use('/changepassword',checkUserAuth)
router.use('/loggeduser',checkUserAuth)



// public routes

router.post('/register',UserController.userRegistration)
router.post('/login',UserController.userLogin)
router.post('/resetpasswordemail',UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token',UserController.userPasswordReset)





// protected routes

router.post('/changepassword',UserController.changeUserPassword)
router.get('/loggeduser',UserController.Loggeduser)




export default router
