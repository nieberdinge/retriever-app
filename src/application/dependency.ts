import { QuizRepository } from "../infrastructure/Quiz/QuizRepository";
import TrainingPlanRepository from "../infrastructure/trainingPlanRepository";


export const trainingPlanRepository = new TrainingPlanRepository();
export const quizRepository = new QuizRepository(trainingPlanRepository);