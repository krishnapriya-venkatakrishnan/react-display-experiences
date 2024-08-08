## Experiences- static page

### Overview
This page displays a list of experiences available. Multiple components are created to display specific data.
This is a static web page.

### Component hierarchy
![Tree](https://github.com/user-attachments/assets/313e530f-4e32-4d88-a4f1-9dcf62aeb4c8)

### Components involved and its purpose:
- Header: It displays the logo.
- Pictures: Displays the home page picture.
- Experiences: Displays the online experience content.
- Cards: This gets the experiences information from data.js. This stores the data as an array of objects. This loops through each item(object) and pass the object details to the
  IndCard component.
- IndCard: Receives the object values as props and displays the activity information with specific styling.

### Concepts used:
- Values passed as <mark>**props**</mark> from Cards to IndCard.

### Live Demo:
(https://scrimba-krishna-v-react-static-page.netlify.app/)
