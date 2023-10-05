---
sidebar_position: 2
---
# Development Environment
The development environment is configured using Docker, binding the local directory directly to the container. This enables developers to access and observe real-time code modifications. Docker containers also encapsulate the development environment, ensuring that all developers work within the same context


### Start containers
```
$ docker-compose -f docker-compose-dev.yaml up -d
```

To force rebuild: add `--build` tag

### Stop containers
```
$ docker-compose -f docker-compose-dev.yaml down
```

To delete volume(this will delete data in the database): add `-v` tag

## Update database schema

```
$ alembic upgrade head
```

## Clean up database
```
$ alembic downgrade base
```
