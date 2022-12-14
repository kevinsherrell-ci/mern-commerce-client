

MERNcommerce

MERNcommerce is an E-commerce application built using MERN stack (MongoDB, Express.js, Node.js, React.js)

Goal

As an E-commerce application the goal of this project is to create a seamless experience for the user to browse products, add them to their cart, and checkout. Eventually this project will become a template for my future E-commerce stores.

Current functionality

Currently, can create accounts/profiles, log in/out, browse products and add them to their cart. User accounts,  profiles, and carts are stored in the MERNcommerce MongoDB database; product data is retrieved from the makeup api (More information on the makeup API here https://makeup-api.herokuapp.com/).

Currently working on....

    A "wishlist" for users to save items that they may want to purchase in the future.
    A checkout page allowing users to purchase products using various payment gateways.
    Making the search field in the navigation bar functional.

Future functionality

    An account section that allows users to update their personal information. Currently there is a profile-setup page that the user is routed to if their account is new and their profile is not yet active.
    Email verification when an account is created.
    Password reset
    Admin panel that allows for customization of store without needing to edit code directly (stretch goal).
    ...lots of other stuff.

Installation

This application requires MongoDB, Express.js and Node.js.

Clone this repository and run npm install.

You will need to create environment variable for both the server and client

Server variables:

PORT - The port that your Express.js server is runing on.

MONGO_URI  - The MongoDB connection string.

MONGO_DATABASE - The name of the database.

Client variables:

REACT_APP_ENDPOINT - The endpoint to perform API requests. Essentially, the url that your server is running on. For example, if your server is running on localhost:4100, this would be the value that you use for this variable.
311 words
