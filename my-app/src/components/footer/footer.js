import React from "react";
import './footer.css'; // Assuming you have a CSS file for styling

function Footer() {
    return (
        <footer className="footer">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li>about us</li>
                            <li>our services</li>
                            <li>privacy policy</li>
                            <li>affiliate program</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>shipping</li>
                            <li>returns</li>
                            <li>order status</li>
                            <li>payment options</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src="images/icons8-instagram-100.png" alt="Instagram Icon" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="images/icons8-facebook-100.png" alt="Facebook Icon" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src="images/icons8-linkedin-100.png" alt="LinkedIn Icon" />
                            </a>
                            <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                <img src="images/icons8-x-100.png" alt="X Icon" />
                            </a>
                        </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
