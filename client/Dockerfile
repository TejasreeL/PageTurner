# Use Node 24
FROM node:24

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the production version
RUN npm run build

# Install 'serve' globally to serve static files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the app using 'serve' and point to Vite's build folder 'dist'
CMD ["serve", "-s", "dist", "-l", "3000"]
