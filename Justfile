# Load environment variables from .env file
set dotenv-load := true

# Default command lists all tasks
default:
	@just --list

# Run development server
dev:
	bun run dev

# Build the application for production
build:
	bun run build

# Start production server
start:
	bun run start

# Run linting
lint:
	bun run lint

# Create a new blog post (usage: just post <slug> [part])
post slug part="":
	bun scripts/create-post.mjs {{slug}} {{part}}

# Automatically fix linting issues
fix:
	bun x eslint . --fix

# Install dependencies
install:
	bun install

# Clean up build artifacts and dependencies
clean:
	rm -rf .next out node_modules bun.lock

# Reinstall everything from scratch
reset: clean install
