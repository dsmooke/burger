# Eat-Da Burger

<span align="left">

<a href="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"><img alt="M.I.T. License use" src="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"/></a>

 </span>
 
## Description

"Eat-Da-Burger" is a restaurant app that lets users input the names of burgers they'd like to eat. Each burger name that is submitted will be stored in a database, regardless of whether or not the user clicks the `Devour it!` button. The application includes more MySQL, MVC, Handlebars.js, and ORM.

View dployed app [here](https://royale-with-cheese.herokuapp.com/).

![burger-demo](public/assets/imgs/final-burger-demo.png)

### Technologies Used

- Node
- Express
- MySQL
- Handlebars
- ORM

## Table of Contents

- [Goals](#goals)
- [Definitions](#definitions)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
  - [App Setup](#app-setup)
  - [DB Setup](#db-setup)
  - [Config Setup](#config-setup)
  - [Models Setup](#models-setup)
  - [Controller Setup](#controller-setup)
  - [View Setup](#view-setup)
  - [Directory Structure](#directory-structure)
- [Developer](#developer)
- [Bugs](#bugs)
- [Contact](#contact)
- [License](#license)

## Goals

1. The app will let users input the names of burgers they'd like to eat.
2. When a user submits a burger name, the app will display the burger on the left side of the page.
3. Each burger, waiting to be devoured, will have a `Devour it!` button.
4. When the user clicks the `Devour it!` button, the burger will move to the right side of the page.
5. The app will store every burger in a database, whether devoured or not.
6. Host the app on Heroku

## Definitions

The goals and description can be better understood with the following definitions:

**database**
: a collection of data stored electronically.

**DBMS**
: the database management system (i.e. MySQL).

**SQL database**
: Structured Query Language.

**MySQL**
:- the most popular Structured Query Language (SQL) relational database,

**MySQL Shell**
: an advanced client and code editor for MySQL. Provides scripting capabilities for JavaScript and includes APIs for working with MySQL.

**relational database**
: stores and finds data based on its relationship to other data in the database. Relational databases are tabular, meaning that data is stored in tables composed of rows and columns, much like a spreadsheet.

**(MVC)**
: Model-View-Controller design pattern framework.

**Handlebars.js**
:template engine.

**(ORM)**
: Object Relational-Mapping used to create resuable methods for querying a database.

**CRUD**
: functions that Create Render Update Delete.


## User Story

```
As a restaurant owner
I want to be able to know what kinds of burgers my customers would like to eat
So that I can better cater to my customers' taste
But I want the data collection to be fun and not just another survey
```

## Acceptance Criteria

```
GIVEN an application that lets users input the names of burgers they'd like to eat
WHEN the user types a burger name and clicks the submit button
THEN the app will display the burger on the left side of the page - waiting to be devoured
WHEN the burgers are in the waiting area, a `Devour it!` button will appear next to each name
THEN when the user clicks the button, the burger will move to the right side of the page
WHEN the user types in a burger name
THEN the app will store every burge name in a database, whether devoured or not
```

## Installation

#### App Setup

1. Create a GitHub repo called `burger` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Create a server.js file.

5. Install the Handlebars npm package: `npm install express-handlebars`.

6. Install MySQL npm package: `npm install mysql`.

7. Require the following npm packages inside of the server.js file:
   - express

#### DB Setup

1. Inside your `burger` directory, create a folder named `db`.

2. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   - Create the `burgers_db`.
   - Switch to or use the `burgers_db`.
   - Create a `burgers` table with these fields:
     - **id**: an auto incrementing int that serves as the primary key.
     - **burger_name**: a string.
     - **devoured**: a boolean.

3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. Now you're going to run these SQL files.

   - Make sure you're in the `db` folder of your app.

   - Start MySQL command line tool and login: `mysql -u root -p`.

   - With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   - Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   - Close out of the MySQL command line tool: `exit`.

#### Config Setup

1. Inside your `burger` directory, create a folder named `config`.

2. Create a `connection.js` file inside `config` directory.

   - Inside the `connection.js` file, setup the code to connect Node to MySQL.

   - Export the connection.

3. Create an `orm.js` file inside `config` directory.

   - Import (require) `connection.js` into `orm.js`

   - In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     - `selectAll()`
     - `insertOne()`
     - `updateOne()`

   - Export the ORM object in `module.exports`.

#### Model setup

- Inside your `burger` directory, create a folder named `models`.

  - In `models`, make a `burger.js` file.

    - Inside `burger.js`, import `orm.js` into `burger.js`

    - Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    - Export at the end of the `burger.js` file.

#### Controller setup

1. Inside your `burger` directory, create a folder named `controllers`.

2. In `controllers`, create the `burgers_controller.js` file.

3. Inside the `burgers_controller.js` file, import the following:

   - Express
   - `burger.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside your `burger` directory, create a folder named `views`.

   - Create the `index.handlebars` file inside `views` directory.

   - Create the `layouts` directory inside `views` directory.

     - Create the `main.handlebars` file inside `layouts` directory.

     - Setup the `main.handlebars` file so it's able to be used by Handlebars.

     - Setup the `index.handlebars` to have the template that Handlebars can render onto.

     - Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│  
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Developer

[Watch this video for an example of how the app should work](https://www.youtube.com/watch?v=msvdn95x9OM&feature=youtu.be).

Because the app has a backend, Heroku will be used for hosting. Heroku is free, but it will request credit card info if you have more than 5 applications at a time or are adding a database. See [Heroku's Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

## Bugs

** **Update: February 9, 2021** In the process of refactoring the CatsApp the app broke and the buttons don't respond. Added credit card info for verification. Needs to be reworked tbd. **

## Contact

[Dana Smooke]("https://github.com/dsmooke")

## License

[MIT](MITLicense.txt)

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
