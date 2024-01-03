# Lec 03

- ### JSX:

It is not part of React or Javascript but a addition to it to make our life easy.
<br>
Due to `babel` which is inside `parcel` the JSX code gets TRANSPILED( meaning it gets coverted into code the JS can understand ) before it reaches the JS Engine
It is not HTML inside javascript, it's just HTML like syntax.

`JSX ==> React.createElement() ==> ReactElement-JS Object ==> HTMLElement(render)`

Camel case is used to give attributes to tags and variable names should also be in Camel casing. ( camel case is the Capitalization of second word in a name. )

ASentence - Pascal Casing | Usually used for naming clases

a_sentence - snake_casing

aSentence - camelCasing | Usually used for naming functions.

```
const var_name = <tag id="id_name" className="class_name">Things</tag>

```

It is mandatory to add () between the elements () while using JSX for multiple lines.

- ### React Components:

It is a function which return a JSX code.

Ways of creating it: <br>

Class Based Component - OLD WAY <br>
Functional Components - NEW WAY <br>

```
//React Func Compo

const HeadingCompo = () => {
  return <h1>This is a React Function Component.</h1>;
};

//Just another way of creating single line function.

const singleLine = () => <h1>This is in single line</h1>;
```

```
//To call it we use

<HeadingCompo/>

or

<HeadingCompo></HeadingCompo>

or

{ Title() }

```

#### Component Composition

```
const Compo = () => (
  <h1> This is a component. </h1>
)

// Component Composition
const ComponentComposition = () => (
  <Compo />
  <h1> This Functional Component uses Component Composition. </h1>
)

```

```
// Writing functions inside a component.

const writingFunctions = () => (
  { console.log("Im inside a Func Compo") }
  <h1> This Functional Component uses Component Composition. </h1>
)

// Using HTML tags
const tags = ( <h1>TAG</h1> );

const usingTags = () => (
  {tags}
  <h1>This is using tags.</h1>
)

```

- ### Random Knowledge

  Suppose this api send malicious data, this attack is known as cross-site scripting.
  `const data = api.getData();` <br>

  JSX will sanitize it therefore preventing cross-site scripting.
