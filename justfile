set dotenv-load := true

# Print `Building...` message
build-all:
    echo "building..."

build FILE:
    npx tsc --skipLibCheck {{ FILE }}
