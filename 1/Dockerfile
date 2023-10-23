# Use a minimal Python image as the base image
FROM python:3

# Set the working directory in the container
WORKDIR /app

# Copy your HTML, CSS, and JS files to the container
COPY . /app

# Expose port 8000 for the Python server
EXPOSE 8000

# Start a simple Python HTTP server to serve your files
CMD ["python", "-m", "http.server", "6000"]