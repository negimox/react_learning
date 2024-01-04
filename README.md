# Lec 04

- ### JSX:

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

Why?
When there are components at same level, React needs a way to identify each component uniquely.
So for example we didnt give key to same level components and we want to insert a component at the first place React won't know about first place and will have to re render all of the components again.
But if each had unique ID then React will be able to identify all the components and if we inserted a component at first index React will only load that components not re render all the other components.

- ## Passing Data

### Props:

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

### Config Driven UI

All the UI is driven by a config, this allows every elements to be controlled via data depending on countries, time, date, user etc.

### JS

Learn Map, Filter & Reduce

This is optional chaining.
const {} = data?.data;
