import React from "react";

const UpdateUser = () => {
  return (
    <div className="container">
      <h1>Hello, username</h1>
      <form>
        <ul>
          <li>
            <input type="text" placeholder="username" />
          </li>
          <li>
            <input type="text" placeholder="email" />
          </li>
          <li>
            <input type="password" placeholder="password" />
          </li>
        </ul>
      </form>
      <button>Edit</button>
      <button>Update</button>
    </div>
  );
};

export default UpdateUser;
