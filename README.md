## Description

A Push Notification Service for Firebase and SIP based APPs.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## APIs

Send a notification to a specific user topic.
```
curl http://localhost:3000/send/:user/:server/:callid/:uuid
```
_The registered topics must be: ```<user>%<server>```_.
