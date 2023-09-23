# Backups

## Introduction

This document provides steps to set up automated backups for a PostgreSQL database using Docker and instructions to restore from the backups.

## Setup Automated Backups

We use the docker-postgres-backup-local image to facilitate our backup tasks. Once the service is started, this will automatically create backups of database daily and maintain.

https://github.com/prodrigestivill/docker-postgres-backup-local

## Restore from fresh database

To restore a backup to a fresh database:

```bash
docker exec -it db psql --username=db_user --dbname=postgres -c "DROP DATABASE database;"
```

```bash
docker exec -it db psql --username=db_user --dbname=postgres -c "CREATE DATABASE database;"
```

```bash
docker exec -it db psql --username=db_user --dbname=database -c "CREATE EXTENSION IF NOT EXISTS postgis;"
```

```bash
docker exec -it db psql --username=db_user --dbname=database -c "CREATE EXTENSION IF NOT EXISTS vector;"
```

```bash
sudo docker exec -it db /bin/sh -c "zcat /backups/last/database-latest.sql.gz | psql --username=db_user --dbname=database -W"
```

### Change permission for backups

If necessary, adjust the permissions for the backup files.

```bash
docker exec -u root -it db-backup chown -R 999:999 /backups
```

### Check backup volumes content

To inspect the contents of the backup volume:

```bash
sudo docker run --rm -it -v settle-aid_dbbackups_volume:/volume_content alpine:latest /bin/sh
```
