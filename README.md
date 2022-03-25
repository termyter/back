
### Run in Docker localy

```shell
docker build --tag example-notes-service:0.0.1 .

docker run -it --rm -p 3000:3000 example-notes-service:0.0.1

Bild/start.  docker-compose up --build

Stop    docker stop $(docker ps -a -q)

```
