#!/bin/bash

# Remove node_modules, .next, and package-lock.json
rm -rf node_modules
rm -rf .next
rm -f package-lock.json
sleep 2
sudo kill -9 $(sudo lsof -t -i:3000)
sleep 2


# Build and run the app
#npm run build
yarn install
sleep 2
#next build
npm run build
sleep 2
npm start