


# Frontend Demo Server

## Build Image by trigger Github Action

- Switch to deploy branch by `git switch deploy`
- Merge from main branch by `git merge main`
- Push to `deploy` using `git push` branch will trigger `build_push_image` workflow
- The image will be pushed to [GHCR](https://github.com/topmello/settle-aid-frontend/pkgs/container/settle-aid-frontend)


## Pull Image in GCP and Run Container

- SSH to GCP instance

```bash
gcloud compute ssh <instance-name>
```

- `cd ..` to go to home directory

- Pull the latest image from GHCR
```bash
sudo docker-compose -f docker-compose-frontend.yaml pull
```

- Start the container
```bash
sudo docker-compose -f docker-compose-frontend.yaml -p settle-aid up -d
```


