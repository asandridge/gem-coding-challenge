## Live Demo

http://64.227.10.216/

## Architecture and Technology

For this project I decided to use React.js for the front end and Laravel with MongoDB for the back end. The project is hosted on a Digital Ocean droplet with Nginx. Quiz data is stored in a remote MongoDB cluster (populated on server start) and is loaded into the app at runtime. I chose React since it is the most popular and well used Javascript framework, as well as something I have used in the past. I decided to use Laravel as part of the back end because it is something I have never worked with before, and thought it would be worthwhile to learn about PHP and this popular framework. Lastly, I decided to use MongoDB so that it could easily deliver JSON data to the front end.

## Security

This is not designed as a fully secure quiz application. Due to time constraints, some trade-offs had to be made. One of which is that the answers to the quiz are delivered to the front end application as part of the initial GET request. This means that anyone with enough technical skill could view the answers before submitting the quiz. If this were a real quiz application, it would be important to only deliver the questions and answer-options to the front end on load, sending the user answers to the server on submission, which would validate them on the server side and return the correct answers to the user.

## Local Setup

I detail the steps for setting up on Debian/Ubuntu, but detailed setup for other systems can be found in the respective links.

Most of the setup can be found here:

https://www.mongodb.com/compatibility/mongodb-laravel-intergration

**Download the project:**
```
git clone https://github.com/asandridge/gem-coding-challenge
```

**Install nvm and Node:**
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install 16.13.0
```

**Download PHP Packages:**
```
sudo apt install php-bcmath php-mbstring php-xml php7.4-cli php-curl php-pear
```
For running the application on an Nginx server the following packages are also required:
```
sudo apt install php-fpm php-mongo
```
https://www.php.net/manual/en/install.php

**Install Composer:**
```
curl -sS https://getcomposer.org/installer |php
sudo mv composer.phar /usr/local/bin/composer
```
https://getcomposer.org/download/

**Install Laravel-MongoDB:**
```
cd gem-coding-challenge
sudo pecl install mongodb
```
Add this line to php.ini:
```
extension="mongodb.so"
```
https://www.mongodb.com/compatibility/mongodb-laravel-intergration

**Setup MongoDB Server:**

There are a few ways to do this. The first way which I recommend is to set up a local installation. The second (which I did for this project) is to set up a remote cluster through MongoDB's Atlas.

Once you have your MongoDB URI you can add this line to your `.env` file in `gem-coding-challenge`:
```
MONGODB_URI=$YOUR_URI_HERE
```

https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database

https://www.mongodb.com/atlas/database

**Install Local Packages:**
```
cd gem-coding-challenge
npm install
composer install
```

**Start Laravel:**
```
php artisan serve
```

The application should be served on http://127.0.0.1:8000/!