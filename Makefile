.PHONY: build
build: setup
	bun run ./script/build.ts

.PHONY: dev
dev: setup
	bun run ./script/dev.ts

.PHONY: setup
setup:
	bun install --frozen-lockfile

.PHONY: lint
lint: setup
	bun x @biomejs/biome check

.PHONY: format
format: setup
	bun x @biomejs/biome check --write
