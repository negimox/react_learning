import UserClass from "./UserClass";
import { Component } from "react";
// import UserContext from "../utils/UserContext";

class Contact extends Component {
  constructor(props) {
    super(props);
    // console.log("Constructor_Parent");
  }

  componentDidMount() {
    // console.log("Parent component mounted.");
  }

  render() {
    // console.log("Render_Parent");
    return (
      <div>
        <h1>Contact Us</h1>
        <h2>+91 1234567890</h2>
        {/* Example of using Context in class based components 
         <UserContext.Consumer>
          {(data) => {
            //console.log(data);
          }}
        </UserContext.Consumer> */}
        <UserClass name={"Chetan Pandey (classes)"} />
      </div>
    );
  }
}

// Functional Component
// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <h2>+91 1234567890</h2>
//       <User />

//       <UserClass name={"Chetan Pandey (classes)"} />
//     </div>
//   );
// };

export default Contact;
