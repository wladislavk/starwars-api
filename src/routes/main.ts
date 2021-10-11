import express, {Router} from 'express';
import MainController from "../controllers/mainController";

const router: Router = express.Router();

router.get("/:id", MainController.show);

export default router;
