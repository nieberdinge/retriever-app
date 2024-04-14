import type { QuizAnswers } from "../../business/Quiz/QuizAnswers";
import type { QuizRepository } from "../../infrastructure/Quiz/QuizRepository";

export class QuizController {
    quizRepository: QuizRepository;

    constructor(quizRepository: QuizRepository) {
        this.quizRepository = quizRepository;
    }

    getQuizResults(quizAnswers: QuizAnswers) {
        return this.quizRepository.getRelevantTrainingPlans(quizAnswers);
    }
}