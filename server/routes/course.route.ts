import express from "express";
import { editCourse, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAutheticated,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  isAutheticated,
  authorizeRoles("admin"),
  editCourse
);

courseRouter.get(
  "/get-course/:id",
  getSingleCourse
);
export default courseRouter;