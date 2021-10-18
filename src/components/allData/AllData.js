import React from "react";
import Card from "../Card";
import RowTable from "./RowTable";

import { UserContext } from "../../context";

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <Card
        header="All Data"
        className="card brand-centered brand-margin-top"
        body={
          <>
            <table className="brand-table">
              <thead>
                <tr>
                  <th className="brand-table-th">Name</th>
                  <th className="brand-table-th">Email</th>
                  <th className="brand-table-th">Password</th>
                </tr>
              </thead>
              <tbody>
                {ctx.users.map((user, i) => (
                  <RowTable data={user} key={i} />
                ))}
              </tbody>
            </table>
          </>
        }
      />
    </>
  );
}

export default AllData;
