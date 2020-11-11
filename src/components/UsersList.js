import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteUser } from '../actions/user';

function UsersList({deleteUser, users }) {

    return (
        <ListGroup>
            {users.sort((a,b) => {
                if (a.firstName > b.firstName) {
                    return 1;
                } else if(a.firstName < b.firstName) {
                    return -1;
                }else if (a.lastName > b.lastName) {
                    return 1;
                } else if(a.lastName < b.lastName) {
                    return -1;
                } else {
                    return 0;
                }
            }).map((user) => {
                return (
                    <ListGroupItem key={user.id}>
                        <section style={{display: 'flex'}}>
                            <div style={{flexGrow: 1, margin: 'auto 0'}}>
                                {user.firstName} {user.lastName}
                            </div>
                            <div>
                                <Button outline color='danger' onClick={() => deleteUser(user.id)} >Delete</Button>
                            </div>
                        </section>
                    </ListGroupItem>)
                ;
            })}
        </ListGroup>
    )
}

UsersList.propTypes = {
    deleteUser: PropTypes.func.isRequired
}

export default connect(null, {deleteUser})(UsersList)
