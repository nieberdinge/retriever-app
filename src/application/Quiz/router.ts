import express from 'express';
import { QuizController } from './controller';
import { quizRepository } from '../dependency';

const router = express.Router();

const quizController = new QuizController(quizRepository)

router.get('/', function (req: any, res: any, next: any) {
    const response = quizController.getQuizResults({
        "experience": req.query.experience,
        "totalWeeks": req.query.totalWeeks,
        "totalMileage": req.query.totalMileage,
        "maxLongRun": req.query.maxLongRun
    })
    return res.status(200).json({ results: response });
});

export { router as quizRouter };