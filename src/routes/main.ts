import express, {Router} from 'express';
import MainController from "../controllers/mainController";

const router: Router = express.Router();

router.get("/people/:id", MainController.show);
router.get('*', function(req, res) {
    res.status(404).json({"message": "No route matched"});
});

export default router;
