.PHONY: all

export COMPOSE_PROJECT_NAME=nestjs

all:
	cp env.example .env
	make cleanup
	make up
	cd migration
	docker compose run --rm app yarn migration

cleanup:
	docker compose down
	docker system prune --volumes -f

up:
	docker compose build
	docker compose up -d

migration:
	cd migration
	docker compose run --rm app yarn migration
