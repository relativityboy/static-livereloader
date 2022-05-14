# static-livereloader

## Hello there.

This project is essentially a UI fiddle for hacking super-slow or ugly sites where you'll be tweaking js/css/html just to get the look right.. Ex: When you're working with clients who don't want to give you access, or are running on crappy servers (ex: plone, or that "other" php cms)

You can save the page you're working on and put it in `/public` or just dump whatever you like into it. It should serve up the contents just fine.

PS. The root html file should be names `index.html`

PPS. Live reload should automatically inject.

## Getting started
1. fork the repo
2. clone your fork onto your local computer
3. have [node js](https://nodejs.org/en/) installed
4. in a terminal window (command prompt) on your local computer go to the project directory
5. run the command `npm install`
6. run the commant `npm run start`
7. go to (http://localhost:8081) - you should see a version of the "Hello there" message above
8. In the `/public` directory of this project you should see a `index.html` file. Delete it.
9. Take the saved html page you want to muck with and dump it and any associated files (aka that directory your browser saved along with the main file) into the `/public` directory in this project.
10. Rename the main file of your saved page, the one that is now inside the `/public` folder, `index.html`
11. Take another look at (http://localhost:8081). You should ee your saved page.
12. Now you can edit it as you like, and the page will reload with every change!
