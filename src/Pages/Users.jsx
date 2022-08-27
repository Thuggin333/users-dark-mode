import React, { useContext, useEffect, useState } from "react";
import DarkMode from "../helpers/DarkMode";
import request from "../helpers/request";
import User from "./User";
import "../css/style.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const dark = useContext(DarkMode);
  useEffect(() => {
    request(`https://jsonplaceholder.typicode.com/users`).then((users) =>
      setUsers(users)
    );
  }, []);

  return (
    <div id="main" className={dark ? "darkBgr" : "lightBgr"}>
      {users && users.map((user, i) => <User key={`user${i}`} user={user} />)}
    </div>
  );
}
