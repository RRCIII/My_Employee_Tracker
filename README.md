# Employee Tracker • [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Node.js content management systems application that views and manages employees in a company, by interacting with a database from the command line, using MySQL and Inquirer.js.

## Video Demonstration of Application

- [Click Here]()

## Installation

- Required: LTS or latest version of Node.js
- Required: LTS or latest version of MySQL
- Required: (dotenv).config() for .env commmunication

## Usage

- #### Clone the repository

<img width="400px" height="300px" src="./img/Screenshot_employeeTracker_gitHub.png"/>

- #### Open up a terminal and change directories into the repo. Type in:

```
npm install
```

- #### Start MySQL server and execute both schema.sql & seeds.sql files within the ./sql folder. From the same path, type:

```
mysql -u root (-p for PASSWORD)
SOURCE ./sql/schema.sql;
SOURCE ./sql/seeds.sql;
```

<img width="750px" src="./img/Screenshot_employeeTraker_mysqlDB.png"/>

- #### Start the application from the terminal with:

```
npm run start
```

<img src="./img/Screenshot_employeeTraker_start.png" />

<br>

<img src="./img/Screenshot_employeeTraker_viewAll.png" />

## Credits

- UNC bootcamp collegues, Youtube, and chatGPT

## License

This application is covered under the [MIT License](./LICENSE)
