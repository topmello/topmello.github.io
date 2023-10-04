# DevOps - CI/CD 🚀

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

## Setting up GCP Compute Instance

Before deploying on GCP, ensure the VM instance ready. To set up a VM instance:

1. Go to the GCP Console at https://console.cloud.google.com/.
2. Navigate to the Compute Engine and then VM Instances.
3. Click on "Create Instance."
4. Fill out the necessary details like Name, Region, Zone, Machine type, etc.
5. In the Boot Disk section, select an Ubuntu as OS.
6. Under the Firewall settings, make sure to allow HTTP and HTTPS traffic if your application needs to be accessed over the internet.
7. Once filled out, click "Create" to instantiate your VM.
8. SSH into the instance and install Docker and Docker Compose. The instructions can be found here: https://docs.docker.com/engine/install/ubuntu/
9. Set up NGINX for reverse proxy in the instance.
  9.1 Install NGINX: `sudo apt install nginx`
  9.2 Create a new file in /etc/nginx/sites-available/ and name it settle-aid
  9.3 Copy the following configuration into the file:
  ```to be filled in later```
  9.4 Create a symbolic link to the file in /etc/nginx/sites-enabled/:
  ```sudo ln -s /etc/nginx/sites-available/settle-aid /etc/nginx/sites-enabled/```
  9.5 Test the configuration and restart NGINX:
  ```sudo nginx -t```
  ```sudo systemctl restart nginx```


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
