import React from 'react'
import './css/Footer.css'
import ContactForm from './ContactForm'
import Button from './Button'
//create a footer component
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-left">
            <ContactForm />
                    <div className="footer-left-top">
                        <div className="footer-left-top-left">
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="social">
                <a href="https://www.facebook.com/rcautoworksPA/">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/p/CDt5NXABcj0/?igshid=1f1fdy2s81qg3">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.twitter.com/autoworksga">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="https://www.linkedin.com/company/rc-autoworksga">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer