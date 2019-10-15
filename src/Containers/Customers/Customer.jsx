import React, { Component } from "react";
import CustomerService from "./../../Services/CustomerServices";

class Customer extends Component {
  state = {
    customers: {
      data: [],
      selected: ""
    },
    customer: {}
  };

  async componentDidMount() {
    let data = CustomerService.getCustomers();
    console.log(data);
  }
  render() {
    return <div></div>;
  }
}

export default Customer;
