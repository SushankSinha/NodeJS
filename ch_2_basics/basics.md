# Node.js Essentials

Quick Node.js guides for CLI execution, graceful shutdowns, and environment variables.

## Table of Contents
- [Node.js Essentials](#nodejs-essentials)
  - [Table of Contents](#table-of-contents)
  - [1. Run Node.js Scripts from CLI](#1-run-nodejs-scripts-from-cli)
  - [2. Exit Node.js Programs](#2-exit-nodejs-programs)
    - [Immediate Exit](#immediate-exit)
    - [Graceful Server Shutdown](#graceful-server-shutdown)
  - [3. Read Environment Variables](#3-read-environment-variables)
    - [Set before running](#set-before-running)
      - [NODE\_ENV=production node app.js](#node_envproduction-node-appjs)

## 1. Run Node.js Scripts from CLI

``` node app.js ```

## 2. Exit Node.js Programs

### Immediate Exit

``` process.exit(1) // Exits with code 1 (error) ```

### Graceful Server Shutdown

``` javascript 
const express = require('express')
const app = express()
const server = app.listen(3000)

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
```

### 3. Read Environment Variables

``` javascript 
console.log(process.env.NODE_ENV) // "development"
console.log(process.env.API_KEY)
```

### Set before running

- Access environment variables via `process.env`.
- Example: `process.env.NODE_ENV` defaults to `"development"`.
- Set `NODE_ENV` to `"production"` for production.
- No `require` needed for `process`.

#### NODE_ENV=production node app.js