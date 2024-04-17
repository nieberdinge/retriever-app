import TrainingPlan from "../business/TrainingPlans/TrainingPlan"
import type { TrainingPlanMetadata } from "../business/TrainingPlans/TrainingPlanMetadata";
import trainingPlans from './trainingPlans.json'

class TrainingPlanRepository {
    getTrainingPlan() {
        return new TrainingPlan(new Date(), new Date(), "monday")
    }

    getPremadeTrainingPlans(): TrainingPlanMetadata[] {
        return trainingPlans as TrainingPlanMetadata[]
    }
}

export default TrainingPlanRepository;