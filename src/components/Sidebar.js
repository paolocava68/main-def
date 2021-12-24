import React from "react";
import "./Sidebar.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBNavbarNav,
    MDBNavbarLink, MDBNavbarItem, MDBIcon } from "mdb-react-ui-kit";

function Sidebar() {
    return (
        <MDBCol className={'col-xl-3'}>
            <MDBCard className={'testimonial-card mb-3'}>
                <div className={'card-up img-fluid sfondo-sid'} />
                <div className={'avatar mx-auto white'}>
                    <img src={'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg'}
                         className={'rounded-circle img-fluid'} alt={'Avatar'} />
                </div>
                <MDBCardBody>
                    <h5 className={'font-weight-bolder mb-1'}>Francy89</h5>
                    <p>Francesco Rossi</p>
                    <hr className={'mb-2'} />
                    <MDBListGroup className={'list-group-flush'}>
                        <MDBListGroupItem className={'list-group-item-action border-0 d-flex flex-column font-weight-bold'} tag={'a'} href={'#'}>
                            <p className={'mb-0 d-flex justify-content-between'}>
                                <span>Scheda atleta</span>
                                <span className={'text-primary'}>47</span>
                            </p>
                        </MDBListGroupItem>
                        <MDBListGroupItem className={'list-group-item-action border-0 d-flex flex-column font-weight-bold'} tag={'a'} href={'#'}>
                            <p className={'mb-0 d-flex justify-content-between'}>
                                <span>Programma atleta</span>
                                <span className={'text-primary'}>7</span>
                            </p>
                        </MDBListGroupItem>
                        <MDBListGroupItem className={'list-group-item-action border-0 d-flex flex-column font-weight-bold'} tag={'a'} href={'#'}>
                            <p className={'mb-0 d-flex justify-content-between'}>
                                <span>Visitatori</span>
                                <span className={'text-primary'}>47</span>
                            </p>
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default Sidebar;
