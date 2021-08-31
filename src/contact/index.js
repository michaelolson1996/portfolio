import React from 'react'
import {Link} from 'react-router-dom'
import './contact.css'


const Contact = () => {

    return (
        <div className = "contact-wrap">
            <div className = "contact-form-container">
                <h1 className = "contact-title">Let's Get In Touch!</h1>
                <form>
                    <div className = "line-1-contact-form contact-form-lines">
                        <p className = "contact-form-p-tags">Hello, my name is "</p>
                        <input className = "name-input-contact contact-inputs" type = "text" />
                        <p className = "contact-form-p-tags periods">".</p>
                    </div>
                    <div className = "line-2-contact-form contact-form-lines">
                        <p className = "contact-form-p-tags">I am trying to contact you because "</p>
                        <input className = "reason-input-contact contact-inputs" type = "text" />
                        <p className = "contact-form-p-tags periods">".</p>
                    </div>
                    <div className = "line-3-contact-form contact-form-lines">
                        <p className = "contact-form-p-tags">My phone number is </p>
                        <input className = "phone-input-contact contact-inputs" type = "number" />
                        <p className = "contact-form-p-tags periods">.</p>
                    </div>
                    <div className = "line-4-contact-form contact-form-lines">
                        <p className = "contact-form-p-tags">My email is "</p>
                        <input className = "email-input-container contact-inputs" type = "email" />
                        <p className = "contact-form-p-tags periods">".</p>
                    </div>
                    <div className = "line-5-contact-form contact-form-lines">
                    <p className = "contact-form-p-tags">I prefer to be reached in the </p>
                    <select className = "select-containers" id = "times" name = "timeslist">
                        <option name = "time" value = "morning">morning</option>
                        <option name = "time" value = "afternoon" id = "afternoon">afternoon</option>
                        <option name = "time" value = "evening">evening</option>
                    </select>
                    <p className = "contact-form-p-tags">by</p>
                    <select className = "select-containers" id = "contactpreferences" name = "contactpreferences">
                        <option name = "contactbyphone" value = "Phone">phone</option>
                        <option name = "contactbyemail" value = "Email">email</option>
                    </select>
                    <p className = "contact-form-p-tags">.</p>
                    </div>
                    <div className = "form-button-container">
                        <input type = "button" value = "submit" className = "form-contact-submit" />
                    </div>
                </form>
            </div>
            <div className = "about-bottom-icons-container-contact">
                    <Link to = "/"><i class="fas fa-home about-icons"></i></Link>
                    <Link to = "/projects"><i class="fas fa-project-diagram about-icons"></i></Link>
                    <Link to = "/about"><i class="fas fa-brain about-icons"></i></Link>
                </div>
        </div>
    )
}

export default Contact