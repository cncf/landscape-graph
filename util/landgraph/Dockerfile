#
# https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker
#
# https://engineeringblog.yelp.com/2016/01/dumb-init-an-init-for-docker.html 
# https://github.com/Yelp/dumb-init
#

# --------------> The build image
FROM node:17.4.0 AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/

# ci installs from the package-lock.json (only pinned versions)
RUN npm ci --only=production

# --------------> The production image
FROM node:lts-alpine
RUN apk add dumb-init
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app

ENTRYPOINT ["/usr/bin/dumb-init", "dumb-init", "node", "landgraph.js"]



