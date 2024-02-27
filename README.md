# Lec Bonus

### "LEARN HOW TO READ DOCS."

## Topics Overview

- useSearchParams

## Features

- Search Bar
- n Level Nested Comments
- Live Chat

## React

- Debouncing
  If difference between two stroke is less than the specified time then API call is declined, this allows for a performant search api call so that if the user types fastly then it makes few api calls.

  for eg, debouncing with 200ms:
  this means that - if between 2 keystrokes is <200ms then it will decline api call.

  - if >200ms make api call.

- ### More Hooks

  - #### useMemo

    Allows you to cache result of calculation between re-renders.

    useCase: Lets say you have a web page where a heavy calculation is carried out e.g. finding out prime of n number, then if you added a state variable for lets say theme switch then on every change of theme the same calculation will be done again, again.
    So to counter this problem useMemo is used.

    ```

    let value;

    const HeavyOperation =
    useMemo(()=>
    {
      //Calculation

    }, [value]);

    // It will caches the results until the "value" variable changes.

    ```

  - #### useCallback

    Allows you to cache a function definition between re-renders.
    Like useMemo but here we dont cache a value but a function.

## Important Features

- Making n Level Nested Comments
  s

## React Router DOM

- useSearchParams

# Firebase

## JS
