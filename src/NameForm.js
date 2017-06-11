import React, { PureComponent } from 'react';

class NameForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value, submitted: this.state.submitted });
  }

  handleSubmit(event) {
    this.props.setName(this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, please enter your name:
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NameForm;
