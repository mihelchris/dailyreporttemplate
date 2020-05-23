
# Daily Report Template MVP

> This is a personal project built for educational purposes.  

Simple editable Daily Scrum Report template built with React. 

![Sample Daily Report](https://i.imgur.com/Qfej0wl.png)

## What is a Daily Report?

At [Aleph Labs](https://aleph-labs.com), we're following the practice of submitting Daily Journals — simple reports on planned and completed tasks that also include blockers, gratitudes, planned leaves.

Daily Journal is not only a way of monitoring someone's progress but also a great channel of communication between employees and their managers, so it's important to not only include project-related items but also vital indicators, personal issues, or anything that may influence your wellbeing.

## How to use

You can **try the Template [here](https://qq78u.csb.app/)** without installing.

**Make sure** you have have [Node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) on your machine. 

Clone or download this repo, open Terminal and navigate to the template folder. Check [this link](https://www.codecademy.com/articles/command-line-commands) to learn more about Terminal commands. 

Run `yarn` to install the dependencies. Run the app in the development mode using  `yarn start` . Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

At the moment, the template **doesn't support** export to PDF and print, but it's planned soon.

You can use [Firefox](https://www.mozilla.org/en-US/exp/firefox/new/) built-in feature to take screenshot of an entire page, a Google Chrome [Full Page Screenshot extension](https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl?hl=en), or any other tool to export the page as an image.

## Features

 - Editable name, occupation, gratitude, blockers, planned leaves ([Editable Text Component for React Apps](https://github.com/alioguzhan/react-editext))
 - ToDo list (partially based on [React To-Do Slider with React Hooks](https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks))
 - Vital signs sliders ([React Range Slider](https://github.com/whoisandy/react-rangeslider))
 - Current date
 - Local storage

## Planned

 - Export to PDF
 - Theming