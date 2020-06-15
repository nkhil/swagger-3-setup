## Swagger 3.0 setup

This repository accompanies my blog post about [setting up swagger 3.0 in an express service ](https://nikhilvijayan.com/open-api-swagger-3-setup).

## Setup

```bash
git clone https://github.com/nkhil/swagger-3-setup
cd swagger-3-setup
npm install
npm run develop
```

The app should now be running on http://localhost:8080

Open Postman and set up a GET request to `http://localhost:8080/healthcheck` with `x-correlation-id` in your headers. This needs to be a valid UUID. 

