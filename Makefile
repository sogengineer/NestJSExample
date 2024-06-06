.PHONY: all

all:
	make cleanup
	make build

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