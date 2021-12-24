import React from "react";
import {MDBContainer, MDBRow} from "mdb-react-ui-kit";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function Home() {
  return (
      <div className={'main'} style={{marginTop: '50px'}} >
        <MDBContainer className={'pt-5'}>
          <MDBRow>
            <Sidebar />
            <Feed />
          </MDBRow>
        </MDBContainer>
      </div>
  );
}

export default Home;
