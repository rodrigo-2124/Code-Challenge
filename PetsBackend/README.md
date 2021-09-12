BACKEND LARAVEL
This is the backend part developed to be consumed by the project.

INSTALATIONS
*Install the latest version of COMPOSER in your machine. You can get it here: https://getcomposer.org/download/
*Install a PHP verion >=8.0.9, you can install only PHP or XAMPP, this latest is the easiest and fastest way. You can get XAMPP here: https://www.apachefriends.org/es/index.html

INSTRUCTIONS
*open the directory where you saved this project in your machine and execute the following commands in a CLI.
For example: C:\Downloads\PetsBackend>
    composer install    //It will install all the necesary dependencies for work in Laravel.
    php artisan     //it will show you all the comands available in the Laravel project.
    php artisan migrate:fresh --seed    //this will create the data tables and add some example data into the DB. Called 'database.sqlite', DO NOT CHANGE THE NAME OF THIS DB OR MOVE IT TO ANOTHER DIRECTORY BECAUSE YOU WILL HAVE PROBLEMS. The DB is located at App\database\database.sqlite
    php artisan serve   //this will run a local server to work and test the developed code.

*Once you have written this 3 comands, open the following link http://127.0.0.1:8000/ in a browser. You should see the main page of the Laravel project. It has no changes because it just returns data to be shown in the Frontend.

