import express from "express"
import { login, register } from "../controllers/auth_controller.js";

const router = express.Router();

router.get('/register', register);
router.get('/login', login)

export default router;