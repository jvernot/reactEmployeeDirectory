import React, { useContext } from "react";

import UserContext from "../../utils/userContext";
import TableData from "../TableData/tableData";

const UserData = (props) => {
  const context = useContext(UserContext);
  console.log("context in tableHead!!!:", context);
  console.log("props in tableHead!!!", props);

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
                onClick={() => {
                  props.handleSort(name);
                }}
              >
                {name}
                <span className="pointer"></span>
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
