import React from "react";
import ReactDOM from "react-dom/client";
import "./Login.css";
class Login extends React.Component {
  constructor() {
    super();

    this.state = { form: "login" };

    // I like using objects to toggle values. We could just use true/false and just set to !self value as well.
    this.toggle = {
      login: "register",
      register: "login",
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div
          style={{
            transform: `translate(${
              this.state.form === "login" ? 0 : 250
            }px, 0px)`,
          }}
          className="form-div"
        >
          <form onSubmit={this.onSubmit.bind(this)}>
            <input placeholder="Email" type="text" />
            <input placeholder="Password" type="password" />
            {this.state.form === "login" ? (
              ""
            ) : (
              <input placeholder="Re-typed password" type="password" />
            )}
            <button className="button-primary">Submit</button>
          </form>
        </div>
        <div
          style={{
            transform: `translate(${
              this.state.form === "login" ? 0 : -250
            }px, 0px)`,
          }}
          className="button-div"
        >
          <p>
            {this.state.form === "login"
              ? "Do not have an account?"
              : "Already a member?"}
          </p>
          <button
            onClick={() => {
              this.setState({ form: this.toggle[this.state.form] });
            }}
          >
            {this.toggle[this.state.form]}
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
