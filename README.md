# Django React Demo Project

## Backend

- Django
- Graphene for GraphQL
- iGraphQL
- Factoryboy for fixtures
- Unit tests (TODO)
- API tests (TODO)
- View templates that mount React components
  - From prebuilt bundle in production (TODO)
  - From hot reloading dev server in development

## Frontend

- Parcel bundler
- React
- React-router
- Apollo GraphQL client
- React-bootstrap
- React-table
- Component-driven design
- Storybook integration
- Snapshot tests (TODO)
- E2E tests (TODO)

# Running the demo

## Run backend without Docker

Install poetry for your python environment: https://python-poetry.org/docs/#installation

```
cd backend
poetry install
poetry run ./manage.py install_fixtures
poetry run ./manage.py runserver 0.0.0.0:8001
```

GraphiQL will be available on http://127.0.0.1:8001/graphql

## Run backend with docker

`docker-compose up -d` if you are familiar with docker.

**or**

Use Visual Studio code with the VSCode Remote Containers extension. Open top-level project in VS Code. Choose **Reopen In Remote Container**. Open a terminal and run with:

```
django-admin install_fixtures
django-admin runserver 0.0.0.0:8001
```

## Run frontend

The frontend is always run from your local machine (no docker) for the time being. You will need nodejs and yarn installed.

```
cd frontend
yarn install
yarn django
```

Reach the application on http://0.0.0.0:8001/graphql

## Run storybook

```
cd frontend
yarn install #if required
yarn storybook
```

Access storybook on http://0.0.0.0:9009
