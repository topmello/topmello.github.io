---
sidebar_position: 1
---

# Backend Deisgn Introduction

Welcome to the backend architecture documentation. This resource provides detailed information about the tools, technologies, and decisions that power the platform. The primary objective is to deliver a seamless user experience, ensuring accuracy, speed, and scalability. The choices made in the technology stack reflect this commitment.

## Purpose

Understanding the underlying philosophy of the system is essential. The backend has been built with a user-centric approach. The technology stack is chosen to facilitate rapid iterations, robust data storage, real-time interactions, and insightful analytics. This design allows for continual improvement, ensuring that user expectations are met and exceeded.

## Key Features

- Scalability: The stack is designed to handle growth. Whether it's increasing user data or extending the feature set, the architecture is prepared.
- Performance: Through tools like Redis and FastAPI, a fast and responsive experience is ensured.
- Security: Protecting user data and maintaining privacy is paramount. Every tool and process is vetted to uphold this.
- Maintainability: With tools like Docker and PyTest, it's ensured that the codebase remains organized and that any updates or changes are efficiently integrated and tested.

## Technology Stack

- [PostgreSQL](https://www.postgresql.org): Serving as our primary relational database, PostgreSQL stores user-specific data, including generated routes, prompts used, and room-related information. Its robustness and scalability ensure the efficient handling of user interactions and data.
- [SQLALchemy](https://www.sqlalchemy.org): A Python-based ORM, SQLAlchemy facilitates the interaction between the backend and the database. It also enables the use of Pythonic syntax, allowing for more intuitive and readable code.
- [Alembic](https://alembic.sqlalchemy.org/en/latest/): Alembic is a lightweight database migration tool that enables the creation of database schemas and the migration of data. It is used to create and update the database schema, ensuring that the database is always up-to-date with the latest changes.
- [Redis](https://redis.io): Integrated for its superior performance in managing data with short lifespans, Redis excels in real-time data retrieval. Its capabilities extend to session management, location tracking, and log streaming, all while ensuring optimal storage and enhanced security through its TTL feature.
- [FastAPI](https://fastapi.tiangolo.com): Adopted for its performance and Pythonic nature, FastAPI aids in creating a seamless user interface. It employs Pydantic for data validation, ensuring the quality and integrity of user data inputs.
- [Pydantic](https://docs.pydantic.dev/latest/): Pydantic is a Python library that facilitates data validation and parsing. It is used to validate user inputs, ensuring that the data is of the correct type and format.
- [SlowAPI](https://github.com/laurentS/slowapi): A rate limiting library for Starlette and FastAPI. It is used to limit the number of requests per second to the backend, preventing overloading and ensuring optimal performance.
- Open Data Melbourne: Leveraging datasets from Melbourne's open data platform, our platform gains access to a wealth of city-specific information, ranging from infrastructure to cultural landmarks. This data integration enhances the platform's accuracy and relevance when offering route suggestions or city insights to users.
- [Python SocketIO Server](https://python-socketio.readthedocs.io/en/latest/): Facilitating real-time communication, especially for location tracking features, SocketIO ensures instantaneous data transmission, offering users a real-time interactive experience.
- MapBox, Google Translate & Google Location APIs: These external APIs are integrated to enrich the platform's functionalities. MapBox assists in generating routes, Google Translate aids in user input translation, and the Google API is pivotal for location search, all culminating in a comprehensive user experience.
- [Huggingface's Sentence Transformers](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2): This AI-powered integration enhances the platform's semantic search capabilities, allowing for deeper comprehension of user inputs and more contextually relevant responses.
- [PyTorch](https://pytorch.org): PyTorch is a Python-based machine learning library that enables the use of deep learning models. It is used to train and deploy the name generator model.
- [PyTest](https://pytest.org): PyTest is a Python testing framework that enables the creation of unit tests. It is used to ensure the quality and integrity of the codebase, especially when new features are added.
- [Docker](https://www.docker.com): Docker containers are used to encapsulate the development environment, ensuring that all developers work within the same context. This also enables developers to access and observe real-time code modifications.
