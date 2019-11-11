# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Cían Daly

## Overview.

...... A statement of the app concept and its objectives (a paragraph) ........

. . . . . List of user features  . . . .

- User can post a new review
- User can see other reviews
- User can like posts 
- User can leave a comment on a post


## Setup.

. . . . Having cloned the repo, state the steps required to install and run the app . . . . .

-npm install
-npm start


## Data Model Design.

. . . . . A diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][model]

. . . Briefly explain any non-trivial aspects of the model . . . . .

~~~
place code snippets, e.g. JSON, inside these fence delimiters and they will appear in a block-like structure.
~~~
## UI Design.

. . . . . Screenshots of the app's views with brief statements of their use (see examples below) . . . . . . .

![][main]

>> Shows a list of published games with a link to the user specified site. The listed games each have a comments link to see and post a comment to the chosen game board. There is also a like button for each board for users to upvote games they like.

![][comments]

>> . . .  . . . . . 

## Routing.

. . . . List each route supported by the app. For each one state the associated view and whether it's public/private (requires authentication) . . . . .

- /articles (public)- displays all published articles - title and author only.
- /articles/:id (private) - detail view of a particular article.
+ /articles/:author:id - display all articles by a specific author.
- etc
- etc

## Storybook.

. . . . . A screenshot of the fully expanded list of stories from the tool's UI (see below). . . . .

![][stories]


## Backend (Optional).

. . . . . Briefly explain any backend used by the app (e.g. JSON-server, Open API) . . . . . .  

## Authentication (Optional).

. . . . Briefly explain the authentication method used by your app (e.g. JWT, Firebase) ). If user registration is not supported, mention test username/password pairs available . . . . . .

## Independent learning.

. . . . . State any non-standard aspects of React or other related technologies that you researched and applied in this assignment, other than those covered by the two previous sections . . . . .

[main]: ./images/mainView.png
[comments]: ./images/commentPage.png
[detail]: ./images/detail.png
[stories]: ./images/storybook.png
