import { UserContext } from "../context";
import React from "react";
import Card from "./Card";

function Withdraw(){

    const ctx = React.useContext(UserContext);
    return (
      <>
      <Card 
        header="Withdraw"
        body={
          <>
          
               {JSON.stringify(ctx)}<br/>
          
          </>
        }
      />
     </>
    );
  }
  
  export default Withdraw;