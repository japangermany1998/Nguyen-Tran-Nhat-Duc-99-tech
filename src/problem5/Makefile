up:
	docker compose up -d

down:
	docker compose down --remove-orphans
	docker image prune -f
	docker volume rm $$(docker volume ls -q)
