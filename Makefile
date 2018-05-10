
repl:
	lein repl

cljsbuild-prod:
	lein cljsbuild once prod

cljsbuild-dev:
	lein cljsbuild once dev

figwheel:
	lein figwheel

.PHONY: test
test:
	lein test

git-hash:
	@echo $(shell git rev-parse --short HEAD)
