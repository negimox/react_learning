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

All the UI is driven by a config.
