import express from 'express';
import { QuizController } from './controller';

const router = express.Router();

const quizController = new QuizController()

router.get('/', function (req: any, res: any, next: any) {
    const experience = req.query.experience;
    const totalWeeks = req.query.totalWeeks;
    const totalMileage = req.query.totalMileage;
    const maxLongRun = req.query.maxLongRun;
    const response = quizController.getQuizResults({
        "experience": req.query.experience,
        "totalWeeks": req.query.totalWeeks,
        "totalMileage": req.query.totalMileage,
        "maxLongRun": req.query.maxLongRun
    })
    return res.status(200).json({ results: response });
});

export { router as quizRouter };