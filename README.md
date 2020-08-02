# PROJECT 2 README <!-- omit in toc -->

## Project Planning

<br>

### Overview

**TV VIEWER VAULT** is an app for users to research their favorite shows, discover new shows and see what's on today. Users will be able to create accounts and save their favorites for quick access. Additionally, they will be about to update their "vault" with new shows and delete ohters.

<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Body

![Dummy Link](url)

- Desktop Resource Index

![Dummy Link](url)

- Desktop Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

<br>

### MVP

**TV VAULT VIEWER** MVP will include a login/signup welcome page, basic user homepage with functionality to research, save and modify their personal "vault", and there should be a show/focus page to view complete details of a particular show.

<br>

#### Goals

- successfully validate users
- successfully structure and save signup data
- retrieve and display search data
- full CRUD on "vault" data base for individual user
- create UI that is intuitive and stylish
- responsive accross all screen sizes

<br>

#### Libraries

|   Library    | Description                              |
| :----------: | :--------------------------------------- |
| React Router | navigate between pages                   |
|    Axios     | api calls to 3rd party and app resources |

<br>

#### Data

|         API         | Quality Docs? | Website                            | Sample Query                                                                                      |
| :-----------------: | :-----------: | :--------------------------------- | :------------------------------------------------------------------------------------------------ |
| TheMovieDataBaseAPI |      yes      | https://developers.themoviedb.org/ | https://api.themoviedb.org/3/search/tv?api_key=8d021868bbab84ae4f9d16fdc0645e0c&query=star%20trek |
|     AirtableAPI     |      yes      | https://airtable.com/api           | https://api.airtable.com/v0/appY8EFNMSYGualIW/Table%201                                           |

<br>

#### Component Hierarchy

```
tv-viewer-vault
|__ public/
      |__ favicon.ico
      |__ index.html
      |__ manifest.json
|__ src/
      |__ App.css
      |__ App.js
      |__ Index.css
      |__ Login.js
      |__ Userhome.js
      |__ Showfocus.js
|__ .env
|__ .gitignore
|__ package.json
|__ package-lock.json
|__ README.md
```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| login/signup page   |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| user home page      |    H     |     8 hrs      |     0 hrs     |    0 hrs    |
| set up data base    |    H     |     2 hrs      |     0 hrs     |    0 hrs    |
| create CRUD actions |    H     |     8 hrs      |     0 hrs     |    0 hrs    |
| show/focus page     |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| CSS styling         |    M     |     5 hrs      |     0 hrs     |    0 hrs    |
| media queries       |    M     |     3 hrs      |     0 hrs     |    0 hrs    |
| TOTAL               |          |     3 hrs      |     0 hrs     |    0 hrs    |

<br>

#### Helper Functions

<br>

### Post-MVP

- password/user encryption
- video panel for locally viewing previews from third party websites
- social network links to share content
- calender page to display weekly viewing times

<br>

---

## Project Delivery

### Code Showcase

### Code Issues & Resolutions
