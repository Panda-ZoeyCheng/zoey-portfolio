# Variables
BUILD_CMD = npm run build
DEPLOY_CMD = npm run deploy
START_CMD = npm start
INSTALL_CMD = npm install
TEST_CMD = npm test
LINT_CMD = npm run lint

# Default target
install:
	@echo "Installing dependencies..."
	$(INSTALL_CMD)

# Build target
build: install
	@echo "Building the project..."
	$(BUILD_CMD)

# Deploy target
deploy: build
	@echo "Deploying the project..."
	$(DEPLOY_CMD)

# Start target
start: install
	@echo "Starting the development server..."
	$(START_CMD)

# Test target
test:
	@echo "Running tests..."
	$(TEST_CMD)

# Lint target
lint:
	@echo "Linting code..."
	$(LINT_CMD)

# Clean target - optional, cleans the build directory
clean:
	@echo "Cleaning build directory..."
	rm -rf build

# Help target to display available commands
help:
	@echo "Makefile commands for React project:"
	@echo "  make install  - Installs dependencies"
	@echo "  make build    - Builds the project"
	@echo "  make deploy   - Builds and deploys the project"
	@echo "  make start    - Starts the development server"
	@echo "  make test     - Runs tests"
	@echo "  make lint     - Lints the codebase"
	@echo "  make clean    - Cleans the build directory"
