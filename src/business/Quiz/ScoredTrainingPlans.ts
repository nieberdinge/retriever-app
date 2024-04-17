import type { TrainingPlanMetadata } from "../TrainingPlans/TrainingPlanMetadata";

export interface ScoredTrainingPlan {
    trainingPlanMetadata: TrainingPlanMetadata;
    score: number;
}
