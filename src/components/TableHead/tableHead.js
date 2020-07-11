import React, { useContext } from "react";

import UserContext from "../../utils/userContext";
import TableData from "../TableData/tableData";

const UserData = ({ handleSort }) => {
  const context = useContext(UserContext);
  console.log("context in tableHead!!!:", context);

  return (
    <table className="table">
      <thead>
        <tr>
          {context.headings.map(({ name, width }) => {
            return (
              <th
                className="col"
                key={name}
                style={{ width }}
                // onClick={() => {
                //   handleSort(name);
                // }}
              >
                {name}
              </th>
            );
          })}
        </tr>
      </thead>
      <TableData />
    </table>
  );
};

export default UserData;
