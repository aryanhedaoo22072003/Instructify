import  express  from "express";
import { activateUser, loginUser, logoutUser, registrationUser } from "../controllers/user.controller";
import exp from "constants";
const userRouter =express.Router();

userRouter.post('/registration',registrationUser);

userRouter.post('/activate-user',activateUser);

userRouter.post('/login',loginUser);

userRouter.get('/logout',logoutUser);

export default userRouter;