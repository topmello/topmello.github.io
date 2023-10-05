---
sidebar_position: 3
--- 
# DevOps - CI/CD

## Main Application Dockerfile

The main Dockerfile is structured to set up the environment for the Python application:

- Base Image: Starts from the official Python image python:3.9.17-bullseye.
- Non-root User: A non-root user named myuser is created for better security.
- Working Directory: Sets /usr/src/app as the working directory inside the container.
- Requirements Installation:
  1. Copies the requirements.txt file to the container.
  2. Installs the Python packages listed in requirements.txt using pip.
- Codebase Copy: All application code is then copied to the container's working directory.
- File Ownership & Directories:
  1. Changes the ownership of the working directory to myuser.
  2. Ensures certain special directories exist and are owned by myuser, such as .pytest_cache and the torch cache for sentence transformers.
- Default User: Switches to myuser so all commands run in the container will be executed as this user.
- Default Command: The default command starts the application using uvicorn with the appropriate parameters.

## Dockerfile.db

This Dockerfile is tailored for the PostgreSQL setup with vector extensions:

- Base Image: Uses ankane/pgvector as the base, specialized for vector operations in PostgreSQL.
- PostGIS Extension: PostGIS, a spatial database extension for PostgreSQL, is installed to enable geographical functionalities.
- Default Command: Specifies the default command to start PostgreSQL.

## Docker Compose Overview

### Services:

1. db (PostgreSQL)

- Docker Image: jirathipk/postgres-vec-geo:latest
- Purpose: Used for our main application database.
- Credentials:
- Database: database
- User: db_user
- Password: password1234
- Storage: A volume named database_volume persists the database data.

2. redis

- Docker Image: redis:latest
- Purpose: Redis server for caching and other in-memory tasks.
- Password: topmelloredis
- Storage: A volume named redis_volume is used to persist the Redis data.

3. backend

- Docker Image: jirathipk/settle-aid-backend:latest
- Purpose: Main application.
- Port Mapping: Host's 8000 is mapped to container's 8000.
- Dependencies: Relies on db and redis services to be running.
- Credentials & Config: The environment section contains credentials and configurations.

## GitHub Actions Workflows

### Python Application Test with Docker

This workflow is triggered whenever there's a push to our main branch. It:

1. Checks out repository.
2. Builds and starts Docker Compose services using the dev configuration.
3. Runs pytest within backend service.
4. Shuts down and removes the containers afterward.

### Build and Push Images - Dockerhub

Activated either manually or when there's a push to the deploy branch. The steps include:

1. Checking out repository.
2. Setting up QEMU & Docker Buildx.
3. Logging into Docker Hub using saved credentials.
4. Building Docker images from Dockerfiles (Dockerfile.db & Dockerfile.backend).
5. Pushing these images to Docker Hub.

## Deploying on GCP

- SSH into GCP Instance: `gcloud compute ssh <instance-name> --zone <zone>`
- Change directory: `cd ..`
- Pull the Latest Docker Compose Configuration: `sudo docker-compose pull`
- Start the Containers: `sudo docker-compose -p settle-aid up -d`
  - The -p flag is to set a project name, which can be useful for running multiple environments on the same host
  - The -d flag is to run the containers in the background

## Actions for Developers:

- Modifications: If there are modifications or additions to packages, update requirements.txt so the Docker build process incorporates these changes.
- GitHub Workflows: The Python application test runs on pushes to the main branch, and the Dockerhub build and push are triggered either manually or when pushing to the deploy branch.
