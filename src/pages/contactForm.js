import React from 'react'
import { useFormik } from 'formik';

    const validate = values => {
    const errors = {};
  
    if (!values.accountManager) {
      errors.accountManager = 'Required';
    } else if (values.accountManager.length < 2) {
      errors.accountManager = 'Must be 2 characters or more';
    }

    if (!values.companyName) {
      errors.companyName = 'Required';
    } else if (values.companyName.length < 2) {
      errors.companyName = 'Must be 2 characters or more';
    }

    if (!values.contactName) {
      errors.contactName = 'Required';
    } else if (values.contactName.length < 2) {
      errors.contactName = 'Must be 2 characters or more';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
        return errors;
    };

function ContactForm() {
      
      const formik = useFormik({
        initialValues: {
            accountManager: '',
            companyName: '',
            contactName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
   
  return (
    <>
        <section className="banner inner">
            <div className="container">
                <div className="text-center">
                    <h1>Contact Request Form</h1>
                </div>
            </div>
        </section>
        <section className="contact-form section-padding">
            <div className="container">
                <div className="form">
                    <form onSubmit={formik.handleSubmit}  className="d-flex">
                        <div className="field-wrap half">
                            <label htmlFor="accountManager">Account Manager/Reseller</label>
                            <input
                                id="accountManager"
                                name="accountManager"
                                type="text"
                               onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}
                              value={formik.values.accountManager}
                            />
                            {formik.touched.accountManager && formik.errors.accountManager ? (
                                <span>{formik.errors.accountManager}</span>
                            ) : null}
                        </div>
                        <div className="field-wrap half">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                               onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}
                              value={formik.values.companyName}
                            />
                            {formik.touched.companyName && formik.errors.companyName ? (
                                <span>{formik.errors.companyName}</span>
                            ) : null}
                        </div>
                        <div className="field-wrap half">
                            <label htmlFor="contactName">Company Name</label>
                            <input
                                id="contactName"
                                name="contactName"
                                type="text"
                               onBlur={formik.handleBlur}
                                   onChange={formik.handleChange}
                              value={formik.values.contactName}
                            />
                            {formik.touched.contactName && formik.errors.contactName ? (
                                <span>{formik.errors.contactName}</span>
                            ) : null}
                        </div>
                        <div className="field-wrap half">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <span>{formik.errors.email}</span>
                            ) : null}
                        </div>
                        <div className="field-wrap half">
                            <label htmlFor="email">Phone Number</label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                            />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                <span>{formik.errors.phoneNumber}</span>
                            ) : null}
                        </div>
                        <div className="field-wrap mb-0">
                            <input className="btn submit d-block" type="submit" value="Send Contact request"></input>
                        </div>
                    </form>
                    <form action="" className="d-flex">
                        <div className="field-wrap half">
                            <label htmlFor="">Account Manager/Reseller</label>
                            <input type="text" name=""></input>
                        </div>
                        <div className="field-wrap half">
                            <label htmlFor="">Company Name</label>
                            <input type="text" name=""></input>
                        </div>
                        <div className="field-wrap half">
                            <label htmlFor="">Contact Name</label>
                            <input type="text" name=""></input>
                        </div>
                        <div className="field-wrap half">
                            <label htmlFor="">Email To</label>
                            <input type="email" name=""></input>
                        </div>
                        <div className="field-wrap half">
                            <label htmlFor="">Phone Number</label>
                            <input type="number" name=""></input>
                        </div>
                        <div className="field-wrap half">
                            <label htmlFor="">Product</label>
                            <select name="Product">
                                <option value="None">None</option>
                                <option value="Argent AT" selected="">Argent Advanced Technology Suite</option>
                                <option value="Argent Guardian Ultra" selected="">Argent Guardian Ultra</option>
                                <option value="Argent Commander">Argent Commander</option>
                                <option value="Argent Global Manager">Argent Global Manager</option>
                                <option value="Argent Reports">Argent Reports</option>
                                <option value="Argent Job Scheduler">Argent Job Scheduler</option>
                                <option value="Argent Omega">Argent Omega</option>
                                <option value="Argent SIEM-Complete">Argent SIEM-Complete</option>
                            </select>
                        </div>
                        <div className="field-wrap">
                            <label htmlFor="">Type:</label>
                            <div className="radio">
                                <input type="radio" value="" name="type" id="Sales/Maintenance"></input>
                                <label htmlFor="Sales/Maintenance">Sales/Maintenance</label>
                            </div>
                            <div className="radio">
                                <input type="radio" value="" name="type" id="Technical_Support"></input>
                                <label htmlFor="Technical_Support">Technical Support</label>
                            </div>
                            <div className="radio">
                                <input type="radio" value="" name="type" id="General_Information"></input>
                                <label htmlFor="General_Information">General Information</label>
                            </div>
                        </div>
                        <div className="field-wrap">
                            <label htmlFor="">Details</label>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div className="field-wrap mb-0">
                            <input className="btn submit" type="submit" value="Send Contact request"></input>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    </>
  )
}

export default ContactForm