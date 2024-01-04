# Lec 04, 05

## JSX:

To add style inline we need to pass the style attributes as a JS Object.

```
const style = {
    backgroundColor: "yellow";
};

const div = () =>
{
    return(
        <div className="something">
            <h1 className="heading1" style={style}></h1>
        </div>
    );
};
```

To give unique key to every child in a list.

```
{ResData.map((restaurant) => (
          <FoodCard key={restaurant.info.id} resData={restaurant} />
        ))}

or

{ResData.map((restaurant, index) => (
          <FoodCard key={index} resData={restaurant} />
        ))}

// This method is not recommend, as using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
```

Why do we need to give key?
When there are components at same level, React needs a way to identify each component uniquely.
So for example we didnt give key to same level components and we want to insert a component at the first place React won't know about first place and will have to re render all of the components again.
But if each had unique ID then React will be able to identify all the components and if we inserted a component at first index React will only load that components not re render all the other components.

## Passing Data

- ### Props:

  Basically, are normal arguments to a Function.
  `Syntax:`

  ```
  const Name = (props) => {
      return(
          <div>
              <h1>{props.name}</h1>
          </div>
      )
  };
  <Name name="Ramesh"/>
  ```

  `or (Destructing on the Fly)`

  ```
  const Name = ({name}) => {
      return(
          <div>
              <h1>{name}</h1>
          </div>
      )
  };
  <Name name="Ramesh"/>
  ```

  `or`

  ```
  const Name = () => {
      const {name, age} = props;

      return(
          <div>
              <h1>{name}</h1>
          </div>
      )
  };
  <Name name="Ramesh" age="50"/>
  ```

  <br>

### Config Driven UI

All the UI is driven by a config, this allows every elements to be controlled via data depending on countries, time, date, user etc.

### JS

Learn Map, Filter & Reduce

This is optional chaining.
const {} = data?.data;

## React

<b>Why is it fast?</b>

It does efficient DOM manipulation and it keeps data layer in sync with ui. Its able to do efficient DOM manipulation due to Virtual DOM <br>

### Reconciliation Algo/React Fiber:

https://github.com/acdlite/react-fiber-architecture
/ Check the drawing.tldr

### Diff. Algorithm:

Check the drawing.tldr

- ### Structing

  Most common method is to:
  By Components like Header, Body etc.
  By Features like Feed, Profile, Common etc.

- ### Exporting

  Two types:
  (Default Export)

  ```
  export default file.js

  ```

  (Named Export)

  ```
  export const num=20;
  export const num2=22;
  ```

- ### Importing

  (Default Export/Import)

  ```
  export default Component;
  import Component from "path";
  ```

  (Named Export/Import)

  ```
  export const Component;
  import {Component} from "path";
  ```

- ## React Hooks

  A normal JS Utility Functions given by React but it has powerful functionality.

  Few are:

  - useState() - State Variable in react.
    Whenever a State Variable updates React re-renders the components.

    ```
    //Here we are destructering array on fly.

    const [name, setName] = useState([array]);
    ```

    <br>
    To change State Variable or update it we will have to first supply another attribute in its initilization at 2nd position let setName (set before the var_name is the common convention),<br>
    Then we can modify it by:

    <br>

    ```
    const [var, setVar] = useState([data]);

    const changedData = data_2;
    setVar(changedData);
    ```

    It require a second field setVar to modify the useState variable because of how React core algo works which finds difference between DOM and this second attribute is what triggers it.

  - useEffect()
