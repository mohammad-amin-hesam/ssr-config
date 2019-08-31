import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

const UserList = props => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderUsers = () => {
    return props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  const head = () => {
    return (
      <Helmet>
        <title>{`${props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  };

  return (
    <div>
      {head()}
      Here's a big list of users
      <ul>{renderUsers()}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.items
});

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UserList),
  loadData
};
