# syntax = docker/dockerfile:1

# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1
FROM oven/bun:${BUN_VERSION} as base

# Bun app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Copy the app into the container
COPY . .

# Build the app
RUN bun install --ci && cd frontend && bun install --ci && bun run build

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "run", "start" ]
HEALTHCHECK CMD [ "bun", "run", "healthcheck" ]
