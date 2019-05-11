class postData extends Component {

  constructor() {
      super();
      this.state = { user: {} };
      this.onSubmit = this.handleSubmit.bind(this);
      this.iwiField = React.createRef();
      this.hapuField = React.createRef();
      this.authoriserField = React.createRef(); 
      this.datePlacedField = React.createRef();
      this.dateLiftedField = React.createRef();
      this.descriptionField = React.createRef();
      this.koreroField = React.createRef();
      this.contactEmailField = React.createRef();
  }

    handleSubmit(e) {
      e.preventDefault();
      // var self = this;
      // On submit of the form, send a POST request with the data to the server.
      fetch('http://localhost:5000', { 
          method: 'POST',
          body: {
            Iwi: this.iwiField.current.value,
            Hapu: this.hapuField.current.value,
            Authoriser: this.authoriserField.current.value,  
            DatePlaced: this.datePlacedField.current.value,
            DateLifted: this.dateLiftedField.current.value,
            Description: this.descriptionField.current.value,
            Koreo: this.koreroField.current.value,
            ContactEmail: this.contactEmailField.current.value,
          }
        })
        .then(function(response) {
          return response.json()
        }).then(function(body) {
          console.log(body);
        });
    }
    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="First Name" ref={this.firstNameField}/>
          <input type="text" placeholder="Last Name" ref={this.lastNameField}/>

          <input type="submit" />
        </form>
      );
    }
}

export default postData; 