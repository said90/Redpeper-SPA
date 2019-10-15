import http from "./httpService";
const apiEndpoint = "/Clientes";

class CustomerService {
  async getCustomers() {
    await http.get(apiEndpoint).then(response => {
      return response.date;
    });
  }

  async createCutomer(customer) {
    await http.post(apiEndpoint, customer).then(response => {
      console.log(response);
      this.getCustomers();
    });
  }
}

export default new CustomerService();
