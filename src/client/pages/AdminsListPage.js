import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import RequireAuth from "../components/hocs/requireAuth";

const AdminsListPage = props => {
  useEffect(() => {
    props.fetchAdmins();
  }, []);

  const renderAdmins = () => {
    return props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  };

  return (
    <div>
      <h3>Admins</h3>
      <ul>{renderAdmins()}</ul>
    </div>
  );
};

const mstp = ({ admins }) => ({ admins });

export default {
  component: connect(
    mstp,
    { fetchAdmins }
  )(RequireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
