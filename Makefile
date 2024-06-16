.PHONY: all

export COMPOSE_PROJECT_NAME=nestjs

all:
	cp env.example .env
	make cleanup
	make up
	make mig

cleanup:
	docker compose down
	docker system prune --volumes -f

up:
	docker compose build
	docker compose up -d

mig:
	cp env.example ./migration/.env
	docker compose -f ./migration/docker-compose.yml run --rm migration yarn migration
	docker compose -f ./migration/docker-compose.yml run --rm migration yarn start -- create

