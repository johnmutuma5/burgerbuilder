import HTTP_Requests from '../../HTTP_Requests';

const ajax = new HTTP_Requests();

ajax.config (
  {
    baseURL: "https://burgerbuilder-dd976.firebaseio.com",
    requestHeaders: {
      "Content-type": "application/json"
    }
  }
);

export default ajax;
