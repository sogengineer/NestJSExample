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

up_prisma:
	docker compose run --rm app yarn prisma migrate dev --name init
