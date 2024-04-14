class TrainingPlan {
    startWeek: Date
    endWeek: Date
    startingDay: String

    constructor(startWeek: Date, endWeek: Date, startingDay: String) {
        this.endWeek = endWeek;
        this.startWeek = startWeek;
        this.startingDay = startingDay;
    }
}

export default TrainingPlan;