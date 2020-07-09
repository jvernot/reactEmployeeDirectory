import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

const TableData = () => {
  const context = useContext(UserContext);

  return context.users.map(({ login, name, picture, phone, email, dob }) => {
    return (
      <tbody>
        <tr key={login.uuid}>
          <td className="align-middle">
            <img
              alt={`headshot for ${name.first} ${name.last}`}
              src={picture.medium}
            />
          </td>
          <td className="align-middle">
            {name.first} {name.last}
          </td>
          <td className="align-middle">{phone}</td>
          <td className="align-middle">{email}</td>
          <td className="align-middle">{dob.date}</td>
        </tr>
      </tbody>
    );
  });
};

export default TableData;
