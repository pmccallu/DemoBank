import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { accounts } from "../context/AccountContext";
import UserContext from "../context/UserContext";
import AccountContext from "../context/AccountContext";

export default function AllData() {
  const { accounts } = useContext(AccountContext);
  return (
    <>
      <h5>All accounts</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Current Balance $</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((element, i) => {
            return (
              <tr key={i}>
                <td># {i + 1}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.password}</td>
                <td>{element.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
