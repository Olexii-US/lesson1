import { Component } from 'react';
import { data } from '../data/user.js';
import { UsersList } from './UsersList/UsersList';
import { Button } from './Button/Button';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    users: data,
    isFormShawn: false,
  };
  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId),
    }));
  };

  openForm = () => {
    this.setState({ isFormShawn: true });
  };

  addUser = obj => {
    const newUser = {
      id: nanoid(),
      ...obj,
    };
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isFormShawn: false,
    }));
  };

  toggleStatus = id => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id !== id) {
          return user;
        } else {
          return { ...user, hasJob: !user.hasJob };
        }
      }),
    }));
  };

  render() {
    const { users, isFormShawn } = this.state;
    return (
      <>
        <UsersList
          data={users}
          deleteUser={this.deleteUser}
          toggleStatus={this.toggleStatus}
        />
        ;
        {isFormShawn ? (
          <AddUserForm addUser={this.addUser} />
        ) : (
          <Button text="Add user" clickHendler={this.openForm} />
        )}
      </>
    );
  }
}
