import express, {Router} from 'express';

const router: Router = express.Router();

router.get("/", function(req, res) {
  res.send("API is working properly");
});

export default router;
