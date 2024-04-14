# retriever-app

Install [bun](https://bun.sh/#)

run `bun install` to install all the packages

run `bun dev` to run the application locally

# Postgres Setup

Install [postgres](https://www.postgresql.org/download/)

start up a service with `sudo service postgresql start`

## Create your role in the database
replace <> with your own values

- `CREATE ROLE <username> WITH LOGIN PASSWORD '<password>';`
- `CREATE DATABASE retriever;`
- `GRANT ALL PRIVILEGES ON DATABASE retriever TO <username>;`

## Run the local sql file
run `psql -U <username> -d retriever -a -f db_setup/db_scripts.sql`

## Add your username and password to .env

If you don't have one already, create a .env file.
```
USERNAME=<username>
PASSWORD=<password>
```