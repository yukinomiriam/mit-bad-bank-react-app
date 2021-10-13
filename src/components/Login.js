import { UserContext } from "../context";
import React from "react";
import Card from "./Card";

function Login(){

    const ctx = React.useContext(UserContext);
    return (
      <>
      <Card 
        header="Login"
        body={
          <>
          
               {JSON.stringify(ctx)}<br/>
          
          </>
        }
      />
     </>
    );
  }
  
  export default Login;