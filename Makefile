.PHONY: all test clean

all:
	$(error Not implemented)

test: test-lint

test-lint:
	npx mega-linter-runner

clean:
	rm -rf megalinter-reports
	rm -rf .ruff_cache
