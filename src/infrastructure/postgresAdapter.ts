import { Pool } from 'pg';

class PostgresAdapter {
    connection: Pool;

    constructor() {
        this.connection = new Pool({
            user: process.env.USERNAME,
            host: 'localhost',
            database: 'retriever',
            password: process.env.PASSWORD,
            port: 5432,
        })
    }

    query(query: string) {
        this.connection.query("SELECT * FROM RETRIEVER.USERS.USER limit 1;")
    }

    healthCheck(): Promise<boolean> {
        return this.connection.query("SELECT * FROM RETRIEVER.USERS.USER limit 1;")
            .then(() => true)
            .catch(() => false)
    }
}

export default PostgresAdapter;