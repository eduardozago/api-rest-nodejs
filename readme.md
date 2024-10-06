# API REST - Node.js

## Table of Contents

- [Overview](#overview)
    - [Requirements](#requirements)
    - [Functional Requirements](#funcional-requirements)
    - [Business Rules](#business-rules)
    - [Usage](#usage)
- [Routes](#routes)
    - [Endpoints](#endpoints)
- [Database](#database)
    - [Configuration](#configuration)
- [Test](#test)

## Overview

This API REST manages account transactions with Node.js. For this, use the [TypeScript](https://www.typescriptlang.org/) and [Fastify](https://fastify.dev/) framework.  Data is stored in the **sqlite** database, and operations are performed using the [Knex](https://knexjs.org/) query builder. Cookies are used to identify the user.

### Requirements

For this project, the following (essential for execution) resources were used:
 - [Node.js](https://nodejs.org/)

### Funcional Requirements

- User should be able to create a new transaction
- User should be able to list all transactions
- User should be able to to get a specific transaction
- User should be able to get the account summary

### Business Rules

- Transactions may be credit or debit
- Available to identify the user
- User can only see your transactions

### Usage

First, install the dependencies

```
npm install
```

And then run server:

```
npm run dev
```

The server will run on port `3333`.

## Routes

Routes are managed by a [Fastify](https://fastify.dev/) plugin that implements function routes.

### Endpoints
- **POST** - `/transactions`: Create a new transaction
    - Data should be sent in the request body in JSON format.
    - Example:
        ```
        {
            "title": "Lunch",
            "amount": 134,
            "type": "debit"
        }
        ```
- **GET** - `/transactions`: List all transactions from user.
    - Data is received in JSON format.
- **GET** - `/transactions/:id`: Get a specific transaction from the user.
    - Data is received in JSON format.
    - Only user transactions.
- **GET** - `/transactions/summary`: Get user balance account
    - Data is received in JSON format.
    - Example:
        ```
        {
            "summary": {
                "amount": 6836
            }
        }
        ```


## Database

The application uses the [Knex.js](https://knexjs.org/) query builder for database management. Knex allows you to choose a database that is compatible with it. 

The database utilized in this application is **sqlite**.

### Configuration

The database is configured using a virtual environment included in the `.env` file. Inside `.env.example`, you can find an example of variables. 

## Test

[Vitest](https://vitest.dev/) is used to run tests on the application. End-to-end tests are considered in this project, and the [SuperTest](https://www.npmjs.com/package/supertest) package is used to generate an HTTP request and check the replies. 

The following tests have been implemented:
- It should be able to create a new transaction
- It should be able to list all transactions
- It should be able to to get a specific transaction
- It should be able to get the summary

To run tests:

```
npm run test
```

