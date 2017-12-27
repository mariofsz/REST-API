# REST-API

This application, based on javascript, uses Node.js and MongoDB to create a database that
can receive some basic requests and be edited by the use of the GET, PUT, POST and DELETE
functionalities.

The database contains an users list. We can acces this list, read a specific user, create 
a new user and delete an user. Unfortunally, the PUT function isn't working properly, so
we can't edit the user's data.

To improve the application functionalities, Express, Mongoose and BodyParse were used.

The project is based on a MongoDB server. There's a usersdata.js file in the models folder.
This file is an interface where the main code and the database are connected. There's a 
mongoose module use, a user schema construction and functions that will be used in
GET/POST/PUT/DELETE, working with the data flow.

The main file is server.js, which has the code for the GET/POST/PUT/DELETE use.

The application can was tested by the extension "Postman" on Google Chrome. It provides
tools to test the main functions in server.js before the use of inputs of a front end 
application.


