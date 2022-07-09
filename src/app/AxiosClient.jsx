import axios from 'axios';


 class HTTPWrapper {

 get = (url) => {
  return axios.get(url);
        // .then(response =>   response.data)
        // .catch(error => {
        //     console.error('There was an error!', error);
        // });
};

  post = (url, input) => {
   return axios.post(url, input)
  // .then((response) => {
  //  ;
  // }, (error) => {
  //   console.log(error);
  // });
};
  }

export default  HTTPWrapper;
