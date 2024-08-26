FROM node:20-alpine

WORKDIR /app/frontend

# Copy package.json and package-lock.json (or yarn.lock) first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Install serve globally
RUN npm i -g serve

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port that serve will use
EXPOSE 3000

# Start the application
CMD [ "serve", "-n", "-s", "dist" ]
