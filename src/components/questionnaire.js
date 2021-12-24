import React, { Component } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { Input, RadioButton } from "@progress/kendo-react-inputs";
import "@progress/kendo-theme-material/dist/all.css";
import Sidebar from "./Sidebar";
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";

const NativeInput = ({ label, value, onChange, onBlur, onFocus }) => (
    <label className="k-form-field">
        <span>{label}</span>
        <input
            className="k-textbox"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    </label>
);

const Questionnaire = () => {
    const handleSubmit = data => alert(JSON.stringify(data, null, 2));

    return (
        <div className={'main'} style={{marginTop: '50px'}} >
            <MDBContainer className={'pt-5'}>
                <MDBRow>
                    <MDBCol className={'col-xl-12'}>
        <Form
            onSubmit={handleSubmit}
            render={({ allowSubmit, onSubmit }) => (
                <form onSubmit={onSubmit} className="k-form">
                    <fieldset>
                        <legend>Questionario</legend>
                        <div>
                            <Field
                                name="firstName"
                                label="Nome e Cognome"
                                component={NativeInput}
                            />
                        </div>
                        <div>
                            <Field
                                name="profession"
                                label="Professione"
                                component={NativeInput}
                            />
                        </div>

                    </fieldset>
                    <button
                        type="submit"
                        className="k-button"
                        disabled={!allowSubmit}
                    >
                        Submit
                    </button>
                </form>
            )}
        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Questionnaire;
