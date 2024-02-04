import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  // updateProfileController,
  // getOrdersController,
  // getAllOrdersController,
  // orderStatusController,
} from "../controllers/authController.js";
import {  isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn,isAdmin,  testController);

//protected route auth for the Users
router.get("/user-auth", requireSignIn, (req,res)=>{
  res.status(200).send({ok: true});
});

//protected route auth for the Admin
router.get("/admin-auth", requireSignIn,isAdmin, (req,res)=>{
  res.status(200).send({ok: true});
});

export default router;
