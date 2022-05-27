import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";

const UserList = ({ getUsers, users, error, isLoading }) => {

  console.log(users)

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {`Full Name: ${user.firstName} ${user.lastName}`}, 
            {`Email: ${user.email}`}, {`Role: ${user.userRole}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mStP = (state) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error
  }
}

const mDtP = (dispatch) => {
  return {
    getUsers: () => dispatch(actionCreators.getUserRequest()),
  };
};

export default connect(mStP, mDtP)(UserList);
