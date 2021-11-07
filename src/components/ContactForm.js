import React from 'react'
import './css/ContactForm.css'
import '../App.css'
import Button from './Button.js'
// Component: ContactForm
const ContactForm = (props) => {
  return (
    <form className="contact-form" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter name" value={props.name} onChange={props.handleChange} required/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={props.email} onChange={props.handleChange} required/>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" id="message" placeholder="Enter message" value={props.message} onChange={props.handleChange} required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default ContactForm