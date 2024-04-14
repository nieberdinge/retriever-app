import TrainingPlan from "../business/TrainingPlan"

class TrainingPlanRepository {
    getTrainingPlan() {
        return new TrainingPlan(new Date(), new Date(), "monday")
    }
}