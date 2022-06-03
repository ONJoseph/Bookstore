![](https://img.shields.io/badge/Microverse-blueviolet)

# Joseph Ogbole Bookstore project

> React & Redux app

![screenshot](./src/bookstore.png)

## Description

This project will lay the foundations for my Bookstore website. I will create a React and Redux app. I will structure my files using the "feature folder" approach. I will also set up routing using React Router.

## Requirements:

### Phase 1, initialize project with components
- [x] Initialize React app.
- [x] Add React Redux (`npm install react-redux`).
- [x] Structure your application files using a "feature folder" approach and use the ducks pattern for your Redux files. Your files/folder structure could look like this:<br />
...<br />
/src<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---/components<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---/redux<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--- /books<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| books.js<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--- /categories<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| categories.js<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| configureStore.js<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| index.js<br />
- [x] The building blocks of your app should be set as re-usable components.
- [x] Add [React Router](https://v5.reactrouter.com/web/guides/quick-start) and set two `<Route>`s and `<Link>`s for the app's navigation:
  - [x] Books - the default view
    - [x] Should display the list of books (empty at this point but it should be ready for the data) with the Remove button (no functionality yet).
    - [x] Should have a form for adding a book (no functionality yet).
  - [x] Categories
    - [x] Should display "Under construction" text only.
- [x] Styling is not required at this point.

## Built With

- Major languages: Javascript
- Frameworks: React.js
- Technologies used: Redux, Babel, Jest, webpack
- Tested with: - ESLint (JavaScript linting), Stylelint (style linting)

## Live Demo

[Live link]()

### Deployment

- Not ready yet

### Prerequisites

- Internet connection and browser
- A text editor(preferably Visual Studio Code)
- Browser

### Setup

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

### Usage

- Clone the repository using `git clone https://github.com/ONJoseph/Bookstore.git`
- Change directory into the project folder: `cd bookstore`
- Run `npm install`
- Run `npm start`
- A new browser will open automatically with application loaded automatically on port 3000

## Author

👤 **Joseph Ogbole**

- GitHub: [@ONJoseph](https://github.com/ONJoseph)
- Twitter: [@ONJCodes](https://twitter.com/ONJCodes)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/o-n-joseph-ba8425147/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ONJoseph/Bookstore/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse for the Readme Template

## 📝 License

This project is [MIT](./license.md) licensed.