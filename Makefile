
repl:
	lein repl

cljsbuild-prod:
	lein cljsbuild once prod

cljsbuild-dev:
	lein cljsbuild auto demo

figwheel:
	lein figwheel

.PHONY: test
test:
	lein test

git-hash:
	@echo $(shell git rev-parse --short HEAD)

.PHONY: clear
clear:
	rm -rf resources/public/js

PORT=8008

server:
	open "http://127.0.0.1:$(PORT)"
	cd resources/public && python -m SimpleHTTPServer $(PORT)
