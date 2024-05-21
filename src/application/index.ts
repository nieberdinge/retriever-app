import express from 'express';
import trainingPlanRouter from './trainingPlan/traningPlan';
import PostgresAdapter from '../infrastructure/postgresAdapter';
import { quizRouter } from './Quiz/router';
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/trainingPlan', trainingPlanRouter)
app.use('/quiz', quizRouter)

const port = 3001

app.get("/health", (req: any, res: any) => {
    const postgresAdapter = new PostgresAdapter()
    postgresAdapter.healthCheck().then((result) => {
        if (result) {
            console.log("application is healthy");
            res.status(200).send("Healthy!");
        }
        res.send("Application can not connect to postgres");
    }

    )

});

app.listen(port, () => console.log(`Server is listening on port ${port}`));

function setup() {

}

setup()