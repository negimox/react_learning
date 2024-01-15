# Lec 04, 05

### "ALWAYS CODE SLOW"

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

<b>Common Problems</b>

- While creating a input field if you bind its value to a local variable then typing in the input field doesnt reflect on the web page.

```
const [searchText, setSearchText] = useState("");
<input type="text" className="search-box" value={searchText} />
```

<br>
This happens because when we bind a input field to a variable whatever is inside that variable is shown in the input field. So if we dont update the variable according to the inputed text it wont show.

To fix it we use onChange attribute and update out variable.

```
<input
  type="text"
  className="search-box"
  value={searchText}
  onChange={(e) => {
    setSearchText(e.target.value);
  }}
/>
```

<b> Learn </b>

- Map, Filter & Reduce.

- This is optional chaining `const {} = data?.data;`

- Fetch

- Async

- CORS

- Await

- Optional Chaining

<b>Find out</b>

- Difference between:

  ```
  onClick={function}
  onClick={()=> function(item)}
  onClick={function(item)}

  ```

## React

Also called single paged applications.

<b>Why is it fast?</b>

It does efficient DOM manipulation and it keeps data layer in sync with ui. Its able to do efficient DOM manipulation due to Virtual DOM <br>

### Reconciliation Algo/React Fiber:

https://github.com/acdlite/react-fiber-architecture
/ Check the drawing.tldr

### Diff. Algorithm:

Check the drawing.tldr

### Conditional Rendering

It is the rendering of web page based on condition.

- ### Structing

  Most common method is to:
  By Components like Header, Body etc.
  By Features like Feed, Profile, Common etc.

- ### Architecture

  Mainly monolith and microservice are used. ( see archtecture.tldr for more information )

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
  All react hooks start with "use".

  Few are:

  - useState() - State Variable in react, its basically a js function.

    <b>Why is it important? Why not just use normal JS variables?</b>
    Whenever a State Variable updates React re-renders the components, whereas if we used a normal JS variable react wouldn't know wheter the JS variable got updated or not.

    <b>How does state variable value get changed even though its a const variable?</b>
    Because it doesn't change the variables value it creates a new variable with the new value and re renders the page.

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

    Things to remeber:

    - Always initialize it inside body.
    - Always initialize it at top of body.
    - Don't initialize it inside conditional statements or loops or functions because these create inconsistencies.

  - useEffect(): Is called after every render of the component. / It is called after all the components are rendered in an app.

    ```
    //Syntax
    useEffect(() => {
      function();
    }, []);

    //This empty array is known as dependency array.
    function();
    ```

    If dependency array is empty [] ==> then useEffect is called only on initial render.

    If no dependency array isn't there ==> then useEffect called on every render.

    If dependency array is ["variable"] ==> called everytime variable is updated.

- ## Shimmer UI

  It refers to a techique where we show fake empty UI for a better percievd smootness of web applicaiton.

- ## Routing

  ### Types

  - Client Side Routing
    No network call is made, only components get changed.

  - Server Side Routing
    The html page is obtained from a server.

  Using "React Router DOM" library.
  First we will have to create router configuration.

  ```
  // This allows us to create the config
  import { createBroserRouter } from "react-router-dom"

  // This allows our app to acess the routes.
  import { RouterProvider }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,

      //This component is shown when an error in routing occurs
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  root.render(<RouterProvider router={appRouter} />);
  ```

  It also provides a hook, "useRouteError" this gives us a array of data about the error occuring during routing.

  ### Children

  ```
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/",
        element: <Home/>,
      },
    ]
  }
  ```

  <Outlet /> whenever there is a change in path, this component is filled with children according to the path.

  ### Navigating to Different Pages

  Instead of using anchor tags we use <Link></Link>.
  <Link> is also using anchor tag bheind the scene, but it works as a wrapper and keeps a track of it.
  Why?
  Because if used anchor tags then it would refreshes the whole web pages whereas <Link> re render the components.

  ```
  import {Link} from react-router-dom

  <li>
    <Link to="/page">Page</Link>
  </li>
  ```

- ## Dynamic Routing

  ```
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
  }
  // resId here is a paramsId which is useful.
  ```

  useParams hook given by react-router-dom.

  ```
  import {useParams} from "react-router-dom"

  const { resId } = useParams();

  ```

- ## Class Based Components

  It is a class which has a render method which returns a JSX.

  ```
  import React from "react"


  class Name extends React.Component{
    render() {
      return (<div>This is a class based component.</div>);
    }
  }
  ```

  ## To access props.

  ```
  constructor(props) {
    super(props);

    console.log(props);
  }
  ```

  Why write super(props)?

  ## To make, use State Variable

  For initialization:

  ```
  //We also make state variable inside constructor()
  constructor(){
    this.state = {
      var1: 0,
      var2: 0,
    };
  }
  ```

  To use,update it:

  ```
  render(){
    return(
      <div>
        <h2>{this.state.var1}</h2>
        <button onClick={()=>{

          /To update it we use a function called setState() which take the update values as input.
          this.setState({
            var1: this.state.var1 + 1,
          })
        }}>
        Increase Var1
        </button>
      </div>
    );
  }
  ```

  ## Mounted, its Lifecycle

  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  Whenever the class is called at first constructor is always called.
  Contructor ==> Render ==> componentDidMount

  For Parent, Children relationship:

  - Parent_Contructor
  - Parent_Render
    - Children_Contructor
    - Children_Render
    - Children_componentDidMount
  - Parent_componentDidMount

  For Parent, Multiple Children relationship:

  - Parent_Contructor
  - Parent_Render

    - Children_1_Contructor
    - Children_1_Render

    - Children_2_Contructor
    - Children_2_Render

    **It batches Render of both children to optimize itself because manipulating dom is expensive so it batches render which batches rendering of DOM**

    <DOM UPDATED - In Single Batches>

    - Children_1_ComponentDidMount
    - Children_2_ComponentDidMount

  - Parent_ComponentDidMount

  ## Update

  - Render
    < DOM UPDATED >
  - Component Did Mount

  ## Unmount

  Called when the component is unmounted/ when we leave the page.

  ## componentDidMount

  Another function given to us by React.Component. Mostly used for API calls.

- ## Functional Components

  **This code wont stop logging "INTERVAL" even after we change components because we aren't stopping it upon Unmounting.**

  ```
  useState(()=>{
    setInterval(()=>{
      console.log("INTERVAL.")
    })
  },[])
  ```

  **To fix it we use:**

  ```
  useState(()=>{
    const timer = setInterval(()=>{
      console.log("INTERVAL.")
    })

    // This function is called while Unmounting.
    return() =>{
      clearInterval(timer);
    };
  },[])
  ```

- ## Optimizing App

  By following many steps:-

  - ## Single Responsibility Principal

    It means that all components should have only one responsibility.

    By using:

    ## Custom Hooks

    Similar to utility functions.At the end hooks are just js function which return a StateVariable for our usage.

    Some use case is for fetching api:

    ```
    import { useState, useEffect } from "react";
    import { RESTAURANT_API } from "./constant";

    const useRestaurantCard = () => {
      const [listOfRestaurants, setListOfRestaurants] = useState(null);
      useEffect(() => {
        fetchData();
      });

      const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();

        setListOfRestaurants(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      };

      return listOfRestaurants;
    };

    export default useRestaurantCard;
    ```

  - ## Chunking/Code Splitting/Dynamic Bundling/Lazy Loading/On Demand Loading/Dynamic Import

    It means splitting the app or logically breaking the app into different bundles which have smaller chunks. It also only loads that bundle when required.

    ```
    import {lazy} from "react"

    const Bundle = lazy(() => import("./component/Bundle"));
    ```

    As it loads on demand we will need to use <Suspense> before our component call,

    ```
    import {Suspense} from react;

    <Suspense fallback={<h1>Loading..</h1>}> <Bundle/> </Suspense>

    ```

- ## Styling

  - Sass
    It is not a recommended way, its not scalable.
  - Styled Components
    Good.
  - Library & Framworks
    It has prebuilt components.
    - Material UI
    - Bootstrap
    - Chakra UI
    - Ant Design
  - Tailwind CSS
    Its a framework.This is used in this project.

- ## Tailwind CSS

  Pros:

  - No switching between css, jsx.
  - Lightweight

  Cons:

  - Very clutery as the className get very big like very very big.

- ## Higher Order Components

  Is a function that takes a components, then enhances it and returns it. They are pure function meaning we dont modify the base component we are only enhancing it.

  ```
  const component = (){
    return(
      <div></div>
    )
  }

  export const higherOrderComponent = (component) =>{
    return(props)=>{
      return(
        <div>This is a higher order component.</div>

        //Here we are passing the props provided to high order component to the orignal component.
        <component {...props} />
      );
    };
  };

  export default component;

  ```

- ## Controlled
  Meaning the parent has control over the state of the the component.
  Used in:
  - Lifting the state up.
    This refers to where when calling a component we pass the setState() function as props so that the child can alter it.
    ```
    <RestaurantCategory
      key={menu?.card?.card?.title}
      data={menu}
      showItems={index === showIndex && true}
      setShowIndex={() => setShowIndex(index)}
    />
    ```
- ## Uncontrolled Components

  If a component has control of its own state.

- ## Props Drilling

  It refers to how if we want to access some data of the parent of a component of the parent. So if the leaf/bottom most child wants to access it the data will have to pass through all other cousions.

  We should avoid such props drilling.
  Fix:-

- ## Context

  It is like a global place which any component can access.

  Creation:

  ```
  import { createContext } from "react";

  const UserContext = createContext({
    loggedInUser: "Default",
  });

  export default UserContext;

  ```

  Usage:

  ```
  import {useContext} from "react";
  import UserContext from ".../utils/UserContext"

  const data = useContext(UserContext);

  // To use it in a class based component.
  <UserContext.Consumer>
    {(data) => {
      console.log(data);
    }}
  </UserContext.Consumer>
  ```

  Override Default Value:

  ```
  // We need to wrap out top most parent inside <UserContext.Provider>

  const [UsernameVariable, setUsernameVariable] = useState();


  return(
    <UserContext.Provider value={{logged InUser: UsernameVariable}}>
      <header/>
      <body/>
    </UserContext.Provider>
  )
  ```

  Updating:

  ```
  //In parent
  const [UsernameVariable, setUsernameVariable] = useState();

  return(
    <UserContext.Provider value={{logged InUser: UsernameVariable, setUsernameVariable}}>
      <header/>
      <body/>
    </UserContext.Provider>
  )

  //In some component
  import UserContext from "./UserContext.js"

  const {setUsername} = useContext(UserContext);

  onChange={(e) => setUserName(e.target.value)}

  ```

- ## Redux [State Management]

  Always remember Redux isn't mandatory. Only in a application which have lot of components.

  ### Advantage

  - Easier to debug apps.
  - Its a state manager.

  In this project we have used:

  ### Redux Toolkit & React-Redux

  - Easier to use comparatively to Redux.
  - Reduces boilerplate code.
  - Very good for debugging.

  Usage:

  - npm install @reduxjs/toolkit and react-redux
  - Build store.
  - Connect our store to app.
  - Slice (cartSlice)
  - dispatch(action)
  - Selector

    ## Building the store

    ```
    import {createSlice} from "@reduxjs/toolkit"

    const cartSlice = createSlice({
      name: 'cart',
      initialState:
      {
        items:[],
      },
      reducers:
      {
        addItem:(state,action) =>
        {
          state.items.push(action.payload)
        },
        clearCart:(state,action)=>
        {
          state.items.length = 0;
          //OR
          return{items:[]}; //THIS NEW [] will be replaced inside orignalState.

          // Here we can't use:
          // state = [""];
          // Because it doesn't actually mutate the state only makes a reference.
          // Or it is like we are trying to change a local state variable but the actual/orignal state variable isn't altered.
        },
      },
    })

    export const{addItem}=cartSlice.actions;

    export default carSlice.reducer;
    ```

    <b>Make sure to only subscribe using useSelector to data u need not the whole store.</b>

    <b>Reducers</b>
    Learn more about reducers.

    Directly mutating the state was not recommended in Vanila Redux, a copy of state had to be created before mutating the state.

    But now in this version we have to `mutate the state or return a new state`, it still keeps state as immutable i.e. bheind the scene it works the same but it now does those extra steps itself it uses Immer lib to find difference between new state and the previous.

    ## More things to learn:

    - RTK Query ( Earlier we used middleware, thumb)
