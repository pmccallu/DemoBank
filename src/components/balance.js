import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Balance() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {user ? (
        <h5>
          Balance page. Welcome {user.name}, your balance is ${user.balance}
        </h5>
      ) : (
        <p>You are not logged in</p>
      )}
    </>
  );
}
