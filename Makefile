.PHONY: all

all:
	cp env.example .env
	make cleanup
	make up

cleanup:
	docker compose down
	docker system prune --volumes -f

up:
	docker compose build
	docker compose up -d

migrate:
	docker compose run --rm app yarn migrate

insert:
	docker compose run --rm app yarn data_create

data_get:
	docker compose run --rm app yarn data_get