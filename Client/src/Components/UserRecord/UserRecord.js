import React from "react";

function UserRecord() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#ccc",
        padding: "1rem",
        border: "1px solid #ddd",
        gap: "1.5rem",
        fontSize: "1.5rem",
        width: "60%",
        margin: "auto",
      }}
    >
      <div>id</div>
      <div>birth_date</div>
      <div>name</div>
      <div>mobile number</div>
    </div>
  );
}

export default UserRecord;
