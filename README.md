# Bid App Api

Api for the Bid App Web

## Routes

- POST:login - return the user and a JWT token (this authentication is just for development
  purposes, need a great refactor and a better treatment on JWT options)
- GET:user : returns the user, requires token
- PATCH:user/autobid - sets the autobid function on/off, requires token
- PATCH:user/config - change the values of the autobid config, requires token
- GET:products - return all the products, requires token
- GET:products/:id - return the product from id, requires token
- PATCH:products/:id/bid - create a new bid and emit a event that will be heard for making the bot
  autobids on this product, requires token

## Autobid feature

### Developed with EventEmitter, its event listener is call on server criation

#

## Getting started

Clone this repo and run:

` npm i`

or

`yarn`

Use the .env.example as a example of .env file of your own

#

## Dev Mode

Run the script `dev`

The app will be listening on Port 4000

#

## Build

Run the script `build`

This will do `tsc` in your application, every .ts file will have a corresponding .js file

#

## Deploy

After building, run `server`

\*\* Maybe you`ll need to refact the PORT for a environment variable, the project already has the
dovenv in it
