import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/Requests";
import { useAuthContext } from "@asgardeo/auth-react";

function Dashboard() {
  const [users, setUsers] = useState(null);
  const { signOut } = useAuthContext();
  const fetchUsers = async () => {
    try {
      const { data } = await getAllUsers();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1rem",
          marginBottom: "0.7rem",
        }}
      >
        <button onClick={() => signOut()}>Signout</button>
      </div>
      <p style={{ background: "#ccc", margin: "auto", padding: "1rem" }}>
        Label {users?.label}
      </p>

      <div style={{ marginLeft: "1rem", padding: "1rem" }}>
        <p>Probability</p>
        <p>Neg ${users?.probability?.neg.toFixed(2)}</p>
        <p>Neg ${users?.probability?.pos.toFixed(2)}</p>
        <p>Neg ${users?.probability?.neutral.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Dashboard;
