import express from "express";
import {
  registerController,
  loginController,
  testController,
  // forgotPasswordController,
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

//test routes
router.get("/test", requireSignIn,isAdmin,  testController);

export default router;
