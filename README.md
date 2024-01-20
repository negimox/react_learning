# Lec 14-16

### "LEARN HOW TO READ DOCS."

## Topics Overview

- Form Validation
- useRef Hook
- Firebase
- Authentication
- Implement Sign In/ Up API
- Redux Store w/ User Slice
- Implemented Profile, Sign out, Update Profile call
- Movie Data API
- GPT Search

## Features

- Routing Of App
- Login/Signup Page

  - Sign in/ Login page
  - Form Validation
    - Using Formik ( For forms having very big data)

- Browse (Ater Auth)

  - Header
  - Main Movie/ Promoted

    - Trailer in bg
    - Title & Desc
    - Movie Suggestions
      - Movie List\*n

  - NetflixGPT
    - Search Bar
    - Response

## createReact app / Scaffold, Demo application

This create a demo app with pre configured settings. It uses webpack bheind the scene.

```
npx create-react-app project_name
```

## React

- # More Hooks

  - ## useRef

    This allows use to refrence the value linked to an element.

    ```
    import {useRef} from "react";

    const mail = useRef(null)

    ...
    <input ref={mail} type="text" placeholder="Email"/>
    ```

    this will put a object of input in mail when we submit the form.

# Firebase

- ## Deployment
  ```
  npm i -g firebase-tools
  firebase login
  firebar init ( Select hosting )
  firebase deploy
  ```
- ## Other Features
  Read firebase docs for detailed code of features like sign in, sign out, sign up etc.

# TMDB

- ## Deployment

  Get API token by making a account on tmdb.

  ```
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

  ```

- ## API Calls are made twice
  This happens because of React.StrictMode inside the top most root level. But this only happens twice on local/ development mode this is good as it allows us to see inconsistensy between calls.
