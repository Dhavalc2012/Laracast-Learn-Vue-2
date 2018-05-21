import Errors from './Errors';

class Form {
    constructor(data) {
      this.orignalData = data;
  
      for (let field in data) {
        this[field] = data[field];
      }
  
      this.errors = new Errors();
    }
    data() {
      let data = {};
  
  for(let property in this.orignalData){
      data[property] = this[property];
  }
  
        // let data = Object.assign({},this);
        // delete data.orignalData;
        // delete data.errors;
        return data;
    }
    reset() {
      for (let field in this.orignalData) {
        this[field] = "";
      }
      this.errors.clear();
    }
    submit(requestType, url) {
      return new Promise((resolve,reject) => {
        axios[requestType](url, this.data())
        .then(response => {
          this.onSuccess(response.data);
          resolve(response.data);
        })
        .catch(error => {
          this.onFail(error.response.data);
          reject(error.response.data);
        })
      });
     
    }
    onSuccess(data) {
     // alert(data.message);
      this.reset();
    }
    onFail(errors) {
      this.errors.record(errors);
    }
  }

  export default Form;