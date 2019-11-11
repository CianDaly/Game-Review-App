# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Cían Daly

## Overview.

 A game review app with a message board. Users can post a game they want to discuss about with a link to more information of the game or where to purchase the game. Users can then upvote games they like and add comments to the comment section of each game message board. Users can then like comments made by users.

. . . . List of user features  . . . .

- User can post a new review
- User can see other reviews
- User can like posted games 
- User can leave a comment on a game message board
- User can like comments made for each game 


## Setup.

. . . . Having cloned the repo, state the steps required to install and run the app . . . . .

-npm install
-npm start



## Data Model Design.

 Text format of data model used. A stub api of one of the posts created with and array of comments.

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

![][main]

>> Shows a list of published games with a link to the user specified site. The listed games each have a comments link to see and post a comment to the chosen game board. There is also a like button for each board for users to upvote games they like.

![][comments]

>> Displays comments made by user for chosen game. User can then choose to write their own message and their username for the comment. They click submit to add their comment and it is displayed on the game's comment page. 

## Routing.

- / (public) - main home page of app, displays all games with a review message board.
- /posts/:post_id (public) - displays message board of chosen game with comments from user.

## Storybook.

. . . A screenshot of the fully expanded list of stories from the tool's UI . . .

![][stories]


## Backend (Optional).

. . . . . There is no backend functionality implemented for this app . . . . . .  

## Authentication (Optional).

. . . There is no user authentication implemented for this app. . .

## Independent learning.

 Researched how to build and deploy my app to a domain on the internet. The app is hosted and deployed on Surge to view it as an end user would on the internet.
 I watched a tutorial of how to use Firebase for user authentiaction for a sign-up and login process but was unable to implement this fully due to time contrainsts.

[main]: ./images/mainView.png
[comments]: ./images/commentPage.png
[detail]: ./images/detail.png
[stories]: ./images/storybook.png
