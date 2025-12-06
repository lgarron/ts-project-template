.PHONY: build
build: setup
	bun run ./script/build.ts

.PHONY: dev
dev: setup
	bun run ./script/dev.ts

.PHONY: setup
setup:
	bun install --no-save

.PHONY: lint
lint: setup
	bun x @biomejs/biome check

.PHONY: format
format: setup
	bun x @biomejs/biome check --write
