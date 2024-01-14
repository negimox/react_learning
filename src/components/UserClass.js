import React from "react";

class UserClass extends React.Component {
  //Called everytime when the class is initialized.
  constructor(props) {
    super(props);
    console.log("Constructor");
    //useState creation method
    this.state = {
      count: 0,
      userInfo: {
        name: "Test",
        location: "Default",
      },
    };
  }

  //Called after render.
  async componentDidMount() {
    // console.log("Children component mounted.");

    // Use Case for Unmount.
    // this.timer = setInterval(() => {
    //   console.log("REACT INTERVALL!!");
    // }, 1000);

    // API Calls
    const data = await fetch("https://api.github.com/users/negimox");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  // Called on every Update.
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    if (this.state.count2 !== prevState.count2) {
    }
  }

  // Above DidUpdate is comparative to:
  // useEffect(() => {
  //   //Code
  // }, [count])

  // Called when user leaves the page/more specifically when other component get rendered.
  // It is used if a function like setInterval is used in DidMount() we need to clear that interval inside WillUnmount()
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  //Called after contructor
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log("Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>{name}</h3>
        <h3>{location}</h3>
        <h4>Contact: @negimox</h4>
      </div>
    );
    //This returns a piece of JSX which will render.
  }
}

export default UserClass;
