import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

const UserData = () => {
  const context = useContext(UserContext);

  return context.users.map(({ login, name, picture, phone, email, dob }) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr key={login.uuid}>
            <td>
              <img
                alt={`headshot for ${name.first} ${name.last}`}
                src={picture.medium}
              />
            </td>
            <td>
              {name.first} {name.last}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob.date}</td>
          </tr>
        </tbody>
      </table>
    );
  });
};

export default UserData;
