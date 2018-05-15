class Errors {
  constructor() {
    this.errors = {};
  }
  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }
  record(errors) {
    this.errors = errors;
  }

  clear(field) {
      if(field){
    delete this.errors[field];     
    return;     
      }
      this.errors = {}
  }
}

class Form {
  constructor(data) {
    this.orignalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
  }
  data() {
      let data = Object.assign({},this);
      delete data.orignalData;
      delete data.errors;
      return data;
  }
  reset() {
    for (let field in this.orignalData) {
      this[field] = "";
    }
  }
  submit(requestType, url) {
    axios[requestType](url, this.data())
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this));
  }
  onSuccess(response) {
    alert(response.data.message);
    this.reset();
    this.errors.clear();
  }
  onFail(error) {
    this.errors.record(error.response.data);
  }
}

new Vue({
  el: "#app",
  data: {
    form: new Form({
      name: "",
      description: ""
    })
  },
  methods: {
    onSubmit() {
      this.form.submit("post", "/projects");
    },
    onSuccess(response) {
      alert(response.data.message);
      form.reset();
    }
  }
});
