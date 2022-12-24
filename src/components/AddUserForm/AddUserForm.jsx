import { Component } from 'react';

export class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };

  hendleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addUser } = this.props;
    addUser({ ...this.state });
    this.setState({ name: '', email: '' });
  };

  render() {
    const { name, email } = this.state;
    return (
      <form>
        Name
        <label>
          <input name="name" value={name} onChange={this.hendleChange} />
        </label>
        <label>
          Email
          <input name="email" value={email} onChange={this.hendleChange} />
        </label>
        <button>Save</button>
      </form>
    );
  }
}
