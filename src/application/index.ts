import express from 'express';
import trainingPlanRouter from './trainingPlan/traningPlan';
import PostgresAdapter from '../infrastructure/postgresAdapter';
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/trainingPlan', trainingPlanRouter)

const port = 3001

app.get("/health", (req: any, res: any) => {
    const postgresAdapter = new PostgresAdapter()
    postgresAdapter.healthCheck().then((result) => {
        if (result) {
            res.send("Healthy!")
        }
        res.send("Application can not connect to postgres")
    }

    )

});

app.listen(port, () => console.log(`Server is listening on port ${port}`));

function setup() {

}

setup()