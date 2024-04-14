import type TrainingPlan from "../TrainingPlan";

export interface ScoredTrainingPlan {
    trainingPlan: TrainingPlan;
    score: number;
}
