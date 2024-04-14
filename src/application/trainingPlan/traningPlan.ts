import express from 'express';

const trainingPlanRouter = express.Router();

trainingPlanRouter.get('/', function (req: any, res: any, next: any) {
    return res.status(200).json({ message: 'Welcome to Express API template' });
});

export default trainingPlanRouter;