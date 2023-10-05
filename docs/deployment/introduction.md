---
sidebar_position: 1
---

# Deployment Introduction


Deploying a project successfully involves various stages that ensure the smooth transition of code from the developer's machine to a production server. This process is especially crucial for projects with both frontend and backend components, which often have their own deployment pipelines. Here's a brief introduction to the deployment process described above:

## Frontend Deployment:

### 1. **Preparation**:
   - The first step involves logging in using the `expo login` command. This authenticates the developer and allows further commands to be executed.
   - The EAS CLI, a tool for Expo Application Services, is then installed using npm. This CLI is essential for building and deploying Expo projects.

### 2. **Connection to the Expo Project**:
   - The project is then linked with the Expo cloud using the `eas init` command.

### 3. **Build & Connection**:
   - The application is built using the `eas build` command.
   - For frontend-backend interaction, environment variables are set up. This involves identifying the backend server's URL and updating relevant files like `eas.json`.

### 4. **API Integrations**:
   - Third-party services, like Google Places API, are integrated by setting up appropriate environment variables and updating configuration files.

## Backend Deployment:

### 1. **Containerization with Docker**:
   - The backend application is containerized using Docker, where a Dockerfile provides instructions for setting up the environment and running the application.
   - A specialized Dockerfile for PostgreSQL is used to support vector extensions.

### 2. **Service Orchestration with Docker Compose**:
   - Multiple services, such as the backend application, PostgreSQL, and Redis, are orchestrated using Docker Compose. This allows these services to work in tandem.

### 3. **Continuous Integration/Continuous Deployment (CI/CD)**:
   - GitHub Actions are utilized to automate testing and deployment processes.
   - The Python application's tests are run using a workflow that's activated upon pushing code.
   - Docker images are built and pushed to Dockerhub upon certain triggers.

### 4. **Deployment on Google Cloud Platform (GCP)**:
   - A virtual machine instance is set up on GCP's Compute Engine.
   - Necessary software, like Docker and NGINX, are installed on the VM.
   - The application is then deployed on this VM, and containers are managed using Docker Compose.

## Key Takeaway:

This deployment process underscores the importance of automating workflows, ensuring security through environment variables, and effectively using cloud resources. The combination of local tools like Docker and cloud platforms like GCP offers a robust, scalable, and efficient deployment pipeline for developers.
