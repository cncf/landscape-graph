# To use a non-npm version of hugo, invoke make with HUGO set to your hugo command.
# Example: make build HUGO=hugo

HUGO:=npx hugo

ifeq ($(DEPLOY_PRIME_URL),)
DEPLOY_PRIME_URL:=http://localhost:8888/
endif

build:
	$(HUGO) --cleanDestinationDir -e dev -DFE

production-build:
	$(HUGO) --cleanDestinationDir --minify

preview-build:
	$(HUGO) --cleanDestinationDir \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify

serve:
	$(HUGO) serve \
		--buildDrafts \
		--buildFuture

hugo-version:
	$(HUGO) version
