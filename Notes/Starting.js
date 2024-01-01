// const parent = React.createElement("div", {id:"parent"}, 
//     React.createElement("div",{}, 
//     [
//         React.createElement("h1",{}, "THIS IS A H1 TAG."), React.createElement("h2",{}, "THIS IS A H2 TAG."
//     )]
//     )
//     );

// The above is unreadble, So we have another library known as JSX.


// const heading = React.createElement("h1", {}, "Heplo world.");
//This is a object. It is a react element.

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
