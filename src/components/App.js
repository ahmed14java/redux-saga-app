import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsersRequest } from '../actions/user';
import { createStructuredSelector } from 'reselect';
import { selectUsersItems } from '../selectors/users.selector';
import UsersList from './UsersList';
import NewFormUser from './NewFormUser';

function App({ items,  getUsersRequest }) {

  useEffect( () => {
    getUsersRequest()
  }, []);

  return (
    <div style={{margin: '0 auto', padding: '20px', width: '600px'}}>
      <NewFormUser />
      <UsersList users={items} />
    </div>
  );
}

App.propTypes = {
  getUsersRequest: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  items: selectUsersItems
})

export default connect(mapStateToProps, { getUsersRequest })(App);
