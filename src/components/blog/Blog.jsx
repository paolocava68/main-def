import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

function Blog() {
  return (
      <div className={'main'} style={{marginTop: '50px'}} >
          <MDBContainer className={'pt-5'}>
              <MDBRow>
                  <MDBCol className={'col-xl-12'}>
                        <h1 className="text-center mt-5">Il Magazine del Fitness</h1>
                        <Outlet />
                  </MDBCol>
              </MDBRow>
            </MDBContainer>
      </div>
  );
}

export default Blog;
