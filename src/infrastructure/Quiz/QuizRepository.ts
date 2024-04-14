import TrainingPlan from '../../business/TrainingPlan';
import { type ScoredTrainingPlan } from '../../business/Quiz/ScoredTrainingPlans';
import TrainingPlanRepository from '../trainingPlanRepository'
import type { QuizAnswers } from '../../business/Quiz/QuizAnswers';

const STRONG_CORRELATION = 5;
const SLIGHT_CORRELATION = 3;
const NO_CORRELATION = 0;



export class QuizRepository {
    trainingPlanRepository: TrainingPlanRepository;

    constructor(traingPlanRepository: TrainingPlanRepository) {
        this.trainingPlanRepository = traingPlanRepository
    }

    getRelevantTrainingPlans(quizAnswers: QuizAnswers): ScoredTrainingPlan[] {
        const allTrainingPlans = [this.trainingPlanRepository.getPremadeTrainingPlans()];
        const scoredTrainingPlans = allTrainingPlans.map((trainingPlan) => this.scoreTrainingPlan(trainingPlan, quizAnswers))
        return scoredTrainingPlans.sort((a, b) => {
            if (a.score > b.score)
                return 1;
            if (a.score < b.score)
                return -1;
            return 0;
        }
        )

    }

    private scoreTrainingPlan(trainingPlan: TrainingPlan, quizAnswers: QuizAnswers): ScoredTrainingPlan {
        let score = 0;
        score += this.scoreTotalWeeks(0, quizAnswers.totalWeeks);
        score += this.scoreTotalMileage(0, quizAnswers.totalMileage);
        score += this.scoreMaxLongRun(0, quizAnswers.maxLongRun);

        return {
            "trainingPlan": trainingPlan,
            "score": score
        } as ScoredTrainingPlan;
    }

    private scoreTotalWeeks(totalWeeks: number, wantedTotalWeeks: number): number {
        if (totalWeeks === wantedTotalWeeks)
            return STRONG_CORRELATION;
        if (totalWeeks < wantedTotalWeeks + 2 || totalWeeks > wantedTotalWeeks - 2) {
            return SLIGHT_CORRELATION;
        }
        return NO_CORRELATION;
    }

    private scoreTotalMileage(totalMileage: number, wantedTotalWeeks: number): number {
        if (totalMileage === wantedTotalWeeks)
            return STRONG_CORRELATION;
        if (totalMileage < wantedTotalWeeks + 5 || totalMileage > wantedTotalWeeks - 5) {
            return SLIGHT_CORRELATION;
        }
        return NO_CORRELATION;
    }

    private scoreMaxLongRun(maxLongRun: number, wantedMaxLongRun: number): number {
        if (maxLongRun === wantedMaxLongRun)
            return STRONG_CORRELATION;
        if (maxLongRun < wantedMaxLongRun + 1 || maxLongRun > wantedMaxLongRun - 1) {
            return SLIGHT_CORRELATION;
        }
        return NO_CORRELATION;
    }
}