# Code-Challenge
Code Challenge TECHBOL made in Laravel, Angular and SQLite.
## Installations
* Install the latest version of COMPOSER in your machine. You can get it here: https://getcomposer.org/download/
* Install a PHP verion >=8.0.9, you can install only PHP or XAMPP, this last option is the easiest and fastest way. You can get XAMPP here: https://www.apachefriends.org/es/index.html
* Install NodeJS, you can do it from here: https://nodejs.org/es/
## Creation of the SQLite Database
Create a databse called *'database.sqlite'* in this path: _PetsBackend\database\database.sqlite_ , it's very important that the database has the _.sqlite_ extension.
## Instructions PetsBackend (Laravel)
1. Open the directory where you saved this project in your machine and execute the following commands in a CLI. For example: _C:\Downloads\PetsBackend>_
- This will install the necesary dependencies for work in Laravel.
```sh
  composer install 
```    
- This will create the data tables and add some data examples into the DB. Called *'database.sqlite'*, DO NOT CHANGE THE NAME OF THIS DB OR MOVE IT TO ANOTHER DIRECTORY BECAUSE YOU WILL HAVE PROBLEMS.
```sh
 php artisan migrate:fresh --seed
```  
- This will run a local server to test the developed code in Laravel.
```sh
 php artisan serve 
```  
2. Once you have done this open the following link http://127.0.0.1:8000/ in a browser. You should be able to see the main page of the Laravel project. It has no changes because it just returns data to be shown in the Frontend.
## Instructions PetsFrontend (Angular)
1. Open the directory where you saved this project in your machine and execute the following commands in a CLI. For example: _C:\Downloads\PetsFrontend>_
- This will install the necesary dependencies for work in Angular.
```sh
  npm install 
```    
- This will install Angular globaly.
```sh
 npm install -g @angular/cli
```  
- This will run a local server to test the developed code in Angular.
```sh
 ng serve
```  
2. Once you have done this, open the following link http://localhost:4200/ in a browser.  You should be able to see the main page of the Angular project. You can interact with the User Interface here.
## Contact 
* Rodrigo Danubio Moreira Soto - **rodrigo.moreira.soto@gmail.com**
