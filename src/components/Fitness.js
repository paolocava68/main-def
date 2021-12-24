import React from "react";
import {
    MDBCard,
    MDBCardBody, MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import Sidebar from "./Sidebar";

function fitness() {
    return (
        <div className={'main'} style={{marginTop: '50px'}} >
            <MDBContainer className={'pt-5'}>
                <MDBRow>
                    <Sidebar />
        <MDBCol className={'col-xl-8'}>
            <MDBContainer>
                <MDBRow className={'align-items-center mb-5'}>
                    <div className="col-12 col-md">
                        <h4 className="mb-0">
                            Piani e Pacchetti Fitness
                        </h4>
                        <p className="mb-0 text-muted">
                            Scegli il piano più adatto alle tue esigenze.
                        </p>
                    </div>
                    <div className="col-12 col-md-auto">
                    </div>
                </MDBRow>
                <MDBRow className="mb-5">
                    <MDBCol size={'12'} className="col-md-6 col-lg-4 d-flex">
                        <MDBCard className={'mb-6 mb-lg-0 shadow-light-lg'} tag={'a'}
                                 href="/piani">
                            <MDBCardImage className="card-img-top" src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/portfolio/portfolio-1.jpg">

                            </MDBCardImage>
                            <MDBCardBody>
                                <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                                              fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h6 className="text-uppercase mb-1 text-muted">FITNESS</h6>
                                <h4 className="mb-0">Pacchetto Base</h4>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size={'12'} className="col-md-6 col-lg-4 d-flex">
                        <MDBCard className={'mb-6 mb-lg-0 shadow-light-lg'} tag={'a'}
                                 href="https://fitness.paolibostudio.com/pacchetto-fitness/">
                            <MDBCardImage className="card-img-top"
                                          src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/portfolio/portfolio-2.jpg">
                            </MDBCardImage>
                            <MDBCardBody>
                                <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                                              fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h6 className="text-uppercase mb-1 text-muted">FITNESS</h6>
                                <h4 className="mb-0">Pacchetto Base</h4>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size={'12'} className="col-md-6 col-lg-4 d-flex">
                        <MDBCard className={'mb-6 mb-lg-0 shadow-light-lg'} tag={'a'}
                                 href="https://fitness.paolibostudio.com/pacchetto-fitness/">
                            <MDBCardImage className="card-img-top"
                                          src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/portfolio/portfolio-3.jpg">
                            </MDBCardImage>
                            <MDBCardBody>
                                <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                                              fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h6 className="text-uppercase mb-1 text-muted">FITNESS</h6>
                                <h4 className="mb-0">Pacchetto Base</h4>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default fitness;
