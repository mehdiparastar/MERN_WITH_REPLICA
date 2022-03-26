#!/bin/bash

docker image prune -f
docker container prune -f
docker system prune -f

docker-compose up --build -d

sleep 5

docker exec db1 /scripts/rs-init.sh