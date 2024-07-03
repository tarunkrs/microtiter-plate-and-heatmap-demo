# Use an official Node runtime as a parent image
FROM node:18-alpine

# Install Git
RUN apk update && apk add git

# Set the working directory in the container
WORKDIR /react-app

# Copy the package.json and package-lock.json files
COPY package*.json /react-app

# Install dependencies
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm","start"]
