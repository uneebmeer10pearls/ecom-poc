# Ecom POC
## A CRUD app build with Docker/Typescript/Node/Prisma/Postgres

## Installation

TheAapp requires [Node.js](https://nodejs.org/) v18+ and docker to run.Make sure to have both installed locally.
##### Great to have extensions(VScode)
prisma,rest client,typescript
##### Initialize Docker
Build images.
```
docker-compose build
```

spin up the dev server

```
docker-compose up
```
##### Database

login to the postgres docker container using

```docker exec -it ecom-poc-app-1 sh```

For running all migrations locally

``` npx prisma migrate dev --name init ```

For running all migrations on production

``` npx prisma migrate deploy```

run seeder file
``` npm run seed ```


#### CI/CD
A production build is created and deployed as soon as there is a change in the **master** branch
the workflows are defined under **.github/workflows/ci.yml**

#### Api's

if using vscode then head over to request.rest file on root folder it contains all of the Api's sample request for testing

#### Unit Test

to run unit test

``` npm run test ```
