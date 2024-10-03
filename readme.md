# API REST - Node.js

## Table of Contents

- [Overview](#overview)
    - [Requirements](#requirements)
    - [Usage](#usage)
- [Database](#database)
    - [Configuration](#configuration)

## Overview

### Requirements

For this project, the following (essential for execution) resources were used:
 - [Node.js](https://nodejs.org/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Fastify](https://fastify.dev/)
 - [Knex.js](https://knexjs.org/)

### Usage

First, install the dependencies

```
npm install
```

And then run server:

```
npm run dev
```

## Database

The application uses the [Knex.js](https://knexjs.org/) query builder for database management. Knex allows you to choose a database that is compatible with it. 

The database utilized in this application is **sqlite**.

### Configuration

The database is configured using a virtual environment included in the `.env` file. Inside `.env.example`, you can find an example of variables. 



