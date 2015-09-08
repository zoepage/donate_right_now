# Donate Right!

## About
Applikation soll es den Helfern und Organisationen erleichtern gezielt Spenden zu sammeln und gebündelt in kurzer Zeit Aufrufe zu starten was genau wo benötigt wird. 

## Install
````
$ git clone https://github.com/zoepage/donate_right_now.git
$ cd donate_right_now
$ npm install
$ hoodie start
````


## Features
- create item / helper request*
- edit item / helper request*
- delete item / helper request*
- publish request*
- show list of published items / helpers on index
- show list of items / helpers published by user after login
- filter list by category / location
- signin / signup / signout

*after login


## Technology
- HTML5, CSS3, JS (ES5)
- AngularJS
- Hoodie
- Bootstrap

## Flow
![Flow of application](/www/assets/img/flow.jpg)

## JSON
````
item: {
  [
    name: String,
    due: Date,
    quantity: init,
    location: String,
    urgent: init (1 - 5, 5 mostly urgent),
    category: String,
    by: hoodie.account.usr,
    created_on: Date,
    add_info: String
  ]
},
helper: {
  [
    work: String,
    from: Date,
    to: Date,
    quantity: init,
    location: String,
    urgent: init (1 - 5, 5 mostly urgent),
    by: hoodie.account.usr,
    created_on: Date,
    add_info: String
  ]
}

````
