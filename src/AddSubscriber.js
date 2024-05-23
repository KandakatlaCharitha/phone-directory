import React, { Component } from "react";
import Header from "./Header";
import "./AddSubscriber.css";
import { Link, Navigate } from "react-router-dom";

class AddSubscriber extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: "",
      navigate: false, // Add navigate state
    };
  }

  inputChangedHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmitted = (e) => {
    e.preventDefault();
    this.props.addSubscriberHandler(this.state);
    this.setState({ id: 0, name: "", phone: "", navigate: true }); // Set navigate to true
  };

  render() {
    const { name, phone, navigate } = this.state;

    if (navigate) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <Header heading="Add Subscriber" />
        <div className="component-body-container">
          <Link to="/">
            <button className="custom-btn">Back</button>
          </Link>
          <form className="subscriber-form" onSubmit={this.onFormSubmitted}>
            <label htmlFor="name" className="label-control">
              Name:
            </label>
            <br />
            <input
              id="name"
              type="text"
              className="input-control"
              name="name"
              value={name}
              onChange={this.inputChangedHandler}
            />
            <br />
            <br />
            <label htmlFor="phone" className="label-control">
              Phone:
            </label>
            <br />
            <input
              id="phone"
              type="text"
              className="input-control"
              name="phone"
              value={phone}
              onChange={this.inputChangedHandler}
            />
            <br />
            <br />

            <div className="subscriber-info-container">
              <span className="subscriber-to-add-heading">
                Subscriber to be added:{" "}
              </span>
              <br />
              <span className="subscriber-info">Name: {name}</span>
              <br />
              <span className="subscriber-info">Phone: {phone}</span>
              <br />
            </div>
            <button type="submit" className="custom-btn add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSubscriber;
