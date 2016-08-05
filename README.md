Kid0z.io By Joao Pinto
===================================

# Getting Started

### The Installation

I’m assuming that you already have installed node.js on your computer.

	$ git clone https://Stagounet@bitbucket.org/Stagounet/crm.io.git
    $ cd crm
    $ npm install

### MongoDB setup

Again I'm assuming you have already installed **mongoDB** on your computer. If not please refer to the official documentation: http://docs.mongodb.org/manual/installation/

###### For Mac or Linux users:
You need to setup your database folder; If mongoDB is already installed on your machine just use the command mongod providing the folder path you wanna use to store your data. For example I always create a **« data »** folder at the root of my node.js project

	$ mongod --dbpath /Users/me/myFolder/node-local-auth-template/data

###### For Windows users:
On a windows machine locate the mongod.exe file from the MongoDB download and run it to start the server daemon.

Once you’ve install the project and configure your mongo database, you be able to run it.

	$ npm install -g nodemon
	$ nodemon bin/www
