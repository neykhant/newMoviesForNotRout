import React, { Component } from "react";
import Input from "./common/Input";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  username = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log(username);
  };

  componentDidMount() {
    //   this.username.current.focus();
    //   console.log(this.account.username)
  }

  handlechange = (e) => {
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value; // account["username"] = e.target.value

    this.setState({
      account,
    });
    console.log(this.state.account.username);
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handlechange}
          />
          {/* <div className="form-group">
            <label htmlFor="">Username</label>
            <input onChange={this.handlechange} name="username"  value={account.username}  type="text" className="form-control" />
          </div> */}
          <Input
            type="password"
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handlechange}
          />
          {/* <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              onChange={this.handlechange}
              name="password"
              value={account.value}
              type="text"
              className="form-control"
            />
          </div> */}
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
