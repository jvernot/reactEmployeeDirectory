import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

const TableData = () => {
  const context = useContext(UserContext);

  return (
    <tbody>
      {context.filteredUsers[0] !== undefined &&
      context.filteredUsers[0].name !== undefined ? (
        context.filteredUsers.map(
          ({ login, name, picture, phone, email, dob }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={picture.medium}
                    alt={`profile pic for ${name.first} ${name.last}`}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={`mailto: ${email}`} target="__blank">
                    {email}
                  </a>
                </td>
                <td data-th="DOB" className="align-middle">
                  {dob.date}
                </td>
              </tr>
            );
          }
        )
      ) : (
        <></>
      )}
    </tbody>
  );
};

export default TableData;
