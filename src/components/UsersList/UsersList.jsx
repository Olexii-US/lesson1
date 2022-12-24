import PropTypes from 'prop-types';

export const UsersList = ({ data, deleteUser, toggleStatus }) => {
  return (
    <ul>
      {data.map(({ id, name, email, hasJob }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>
            Has Job:
            <span onClick={() => toggleStatus(id)}>{hasJob.toString()}</span>
          </p>
          <button type="button" onClick={() => deleteUser(id)}>
            Delete
          </button>
          {/* <button>Show poster</button> */}
        </li>
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
