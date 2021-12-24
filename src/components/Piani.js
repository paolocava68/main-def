import React from "react";
import "./Piani.css";
import {
    MDBCard,
    MDBCardBody, MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import Sidebar from "./Sidebar";

function piani() {
    return (
        <div className={'main'} style={{marginTop: '50px'}} >
            <MDBContainer className={'pt-5'}>
                <MDBRow>
                    <Sidebar />
        <MDBCol className={'col-xl-8'}>
            <MDBRow className={'justify-content-center mb-5'}>
                <MDBCol size={'12'} className="col-md-10">
                    <h3 className="display-6 fw-bold text-center">Pacchetto Fitness
                    </h3>
                    <p className="lead mb-7 text-center text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.
                        Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat
                        euismod risus proin.
                    </p>
                    <p className="text-justified">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                        Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                        literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                        of Good and Evil) by Cicero, written in 45 BC.
                        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
                        of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                        et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English
                        versions from the 1914 translation by H. Rackham.
                    </p>
                </MDBCol>
            </MDBRow>
            <MDBRow className={'text-center pt-5 pb-5'}>
                <div className="py-12 py-md-13 bg-contain sfondo">
                    <MDBContainer className="py-md-13">
                        <div className="row">
                            <div className="col-12 text-center size">
                                <a className="btn btn-pill btn-success text-body shadow lift"
                                   style={{marginTop: '330px', marginLeft: '60px'}}
                                   data-bigpicture="{'ytSrc': '9I-Y6VQ6tyI'}"
                                   href="https://youtu.be/fLHnqRiSQN4">
                                    <span className="h6 text-uppercase fw-bold"><i className="fe fe-play me-2"></i>Apri video</span>
                                </a>
                            </div>
                        </div>
                    </MDBContainer>
                </div>
            </MDBRow>
            <MDBRow className={'justify-content-center mb-5 pt-5'}>
                <MDBCol size={'12'} className={'col-md-10 mb-5'}>
                    <h3 className="display-6 fw-bold text-center mb-5">
                        Cosa occorre?
                    </h3>
                    <div className="row text-center pt-5 pb-5">
                        <div className="col">
                            <figure className="figure">
                                <img
                                    src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/feet.png"
                                    className="figure-img img-fluid rounded" alt="..." width="120px;"/>
                                <figcaption className="figure-caption text-center">Piedi nudi</figcaption>
                            </figure>
                        </div>
                        <div className="col">
                            <figure className="figure">
                                <img
                                    src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/bottle.png"
                                    className="figure-img img-fluid rounded" alt="..." width="120px;"/>
                                <figcaption className="figure-caption text-center">Acqua in borraccia
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col">
                            <figure className="figure">
                                <img
                                    src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/towel.png"
                                    className="figure-img img-fluid rounded" alt="..." width="120px;" />
                                <figcaption className="figure-caption text-center">Asciugamano</figcaption>
                            </figure>
                        </div>
                        <div className="col">
                            <figure className="figure">
                                <img
                                    src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/yoga-mat.png"
                                    className="figure-img img-fluid rounded" alt="..." width="120px;" />
                                <figcaption className="figure-caption text-center">Tappetino</figcaption>
                            </figure>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
                <MDBCol size={'12'}>
                    <div className="table-responsive mb-5">
                        <table className="table table-align-middle">
                            <thead>
                            <tr>
                                <th>
                                <span className="h6 text-uppercase fw-bold">
                                    Role
                                </span>
                                </th>
                                <th>
                                <span className="h6 text-uppercase fw-bold">
                                Team
                                </span>
                                </th>
                                <th>
                                    <span className="h6 text-uppercase fw-bold">
                                      Location
                                     </span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <a href="#" className="text-reset text-decoration-none">
                                        <p className="mb-1">
                                            Ruby Engineer
                                        </p>
                                        <p className="fs-sm text-muted mb-0">
                                            Responsible for pipeline and build system.
                                        </p>
                                    </a>
                                </td>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="fs-sm mb-0">
                                            Consumer
                                        </p>
                                    </a>
                                </td>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="fs-sm mb-0">
                                            Los Angeles
                                        </p>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="mb-1">
                                            Javascript Prototyper
                                        </p>
                                        <p className="fs-sm text-muted mb-0">
                                            Helping us build quick experiments for testing.
                                        </p>
                                    </a>
                                </td>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="fs-sm mb-0">
                                            Product
                                        </p>
                                    </a>
                                </td>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="fs-sm mb-0">
                                            San Francisco, CA
                                        </p>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="mb-1">
                                            Reliability Engineer
                                        </p>
                                        <p className="fs-sm text-muted mb-0">
                                            Managing operations and testing for improved stability.
                                        </p>
                                    </a>
                                </td>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="fs-sm mb-0">
                                            Consulting
                                        </p>
                                    </a>
                                </td>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="fs-sm mb-0">
                                            London
                                        </p>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="mb-1">
                                            Junior PHP Engineer
                                        </p>
                                        <p className="fs-sm text-muted mb-0">
                                            Help us with any odds and ends that need tackling.
                                        </p>
                                    </a>
                                </td>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="fs-sm mb-0">
                                            Consulting
                                        </p>
                                    </a>

                                </td>
                                <td>
                                    <a href="" className="text-reset text-decoration-none">
                                        <p className="fs-sm mb-0">
                                            Paris
                                        </p>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </MDBCol>
            </MDBRow>
            <div className="col-12 mt-5 mb-5">
                <div className="row">
                    <div className="col-6 mt-8 me-n5 aos-init aos-animate" data-aos="fade-up">
                        <img
                            src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/photos/photo-10.jpg"
                            alt="..." className="img-fluid mb-4 rounded"/>
                        <img
                            src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/photos/photo-12.jpg"
                            alt="..." className="img-fluid rounded"/>
                    </div>
                    <div className="col-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <img
                            src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/photos/photo-9.jpg"
                            alt="..." className="img-fluid mb-4 rounded"/>
                        <img
                            src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/photos/photo-11.jpg"
                            alt="..." className="img-fluid rounded"/>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a href={'/questionnaire'}><button type="button" className="btn btn-success">
                    Acquista il pacchetto
                </button></a>
            </div>
            <div style={{marginBottom: '80px'}}>

            </div>
        </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default piani;
