import React from "react";

function Notification({ setNotification }) {
  return (
    <div className="notification">
      <h2>Press "ESC" to go back</h2>
      <button onClick={() => setNotification(false)}>I understand</button>
    </div>
  );
}

export default Notification;
