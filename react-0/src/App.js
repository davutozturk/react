import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id : 1,
          name : "lorem ipsum",
          email : "loremipsum@lorem.com"          
        },
        {
          id : 2,
          name : "dolor sit",
          email : "dolorsit@dolor.com"          
        },
        {
          id : 3,
          name : "magna aliqua",
          email : "magnaaliqua@magna.com"          
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    let updateUsers= this.state.users;
    updateUsers.push(newUser);
    this.setState({
      users: updateUsers
    });
  }

  deleteUser(id) {
    let updateUsers = this.state.users;

    updateUsers = updateUsers.filter(user => user.id !== id);
    this.setState({
      users: updateUsers
    });
  }
  render() {
    return (
      <div className="container">
        <h4  style={{ marginTop:"20px" }} align="center">User App</h4>
        <hr />
        <AddUser addUser = {this.addUser}/>
        <hr/>
        <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
      </div>
    );
  }
}

export default App;