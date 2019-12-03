# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Cían Daly

## Overview.

 A game review app with a message board. You can create an account to log in with or enter your login info to go to the app home page. Users can post a game they want to discuss about with a link to more information of the game or where to purchase the game. Users can then upvote games they like and add comments to the comment section of each game message board. Users can then like comments made by users.

. . . . List of user features  . . . .

- User can post a new review
- User can see other reviews
- User can like posted games 
- User can leave a comment on a game message board
- User can like comments made for each game 
- User can sign up to web app and make an account
- User can log in to their account to view reviews


## Setup.

. . . . Having cloned the repo, state the steps required to install and run the app . . . . .

-npm install
-npm start



## Data Model Design.

 Text format of data model used. A stub api of one of the posts created with an array of comments.

~~~
        this.posts = [
        {
            id: 1,
            title: "Metal Gear Solid V: The Phantom Pain",
            link: "https://store.steampowered.com/app/287700/METAL_GEAR_SOLID_V_THE_PHANTOM_PAIN/",
            author: "Konami, Kojima Productions",
            comments: [],
            upvotes: 10
        }
~~~
## UI Design.

. . . . Screenshots of the app's views with brief statements of their use . . . . 

![][signup]

>> Initial page when connected to app. User can create an account to login with and use the app.


![][login]

>> If user has an account already for using the app, they can click the login button and be brought to this page then enter their account details and access the main page.

![][main]

>> Shows a list of published games with a link to the user specified site. The listed games each have a comments link to see and post a comment to the chosen game board. There is also a like button for each board for users to upvote games they like.

![][comments]

>> Displays comments made by user for chosen game. User can then choose to write their own message and their username for the comment. They click submit to add their comment and it is displayed on the game's comment page. 

## Routing.

- /home (private) - main home page of app, displays all games with a review message board on the users account.
- /login (public) - page on which user can log into their account and view game review app.
- / (public) - signup page of app where user creates accoutn to log in with.
- /posts/:post_id (public) - displays message board of chosen game with comments from user.

## Storybook.

. . . A screenshot of the fully expanded list of stories from the tool's UI . . .

![][stories]


## Backend (Optional).

. . . . . There is no backend functionality implemented for this app . . . . . .  

## Authentication (Optional).

Incorporated Google Firebase authentication for users to sign up accounts to app database and log in with these credentials.
The home page of the app, where game reviews and comment posts can be seen, is not accesible before the user logs in. 

## Independent learning.

 Researched how to build and deploy my app to a domain on the internet. The app is hosted and deployed on Surge, the url is: gamebunker.surge.sh.


[main]: ./images/mainView.png
[comments]: ./images/commentPage.png
[detail]: ./images/detail.png
[stories]: ./images/storybook.png
[signup]: ./images/signup.png
[login]: ./images/login.png
