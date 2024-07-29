import React, { useState } from 'react';
import './contact.css';

function Contact() {
    // Initialize state for form data and errors
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    // Handle input changes and update form data
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the appropriate state based on input name
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'topic') {
            setTopic(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    // Validate form data
    const validateForm = () => {
        // Object to hold error messages
        const newErrors = {};

        // Validate name
        if (!name.trim()) {
            newErrors.name = "Name is required.";
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailPattern.test(email)) {
            newErrors.email = "Invalid email address.";
        }

        // Validate topic
        if (!topic) {
            newErrors.topic = "Please select a topic.";
        }

        // Validate message
        if (!message.trim()) {
            newErrors.message = "Message is required.";
        }

        // Return the errors object
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        // Prevent default form submission behavior
        e.preventDefault();

        // Validate the form data
        const formErrors = validateForm();

        // If there are validation errors, update the errors state
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            // If the form is valid, handle form submission logic here
            console.log('Form submitted', { name, email, topic, message });

            // Clear the form
            setName('');
            setEmail('');
            setTopic('');
            setMessage('');
            setErrors({});
        }
    };

    return (
        <div className="form-container">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>Use the form below, or send an email to global_sales@thefounders.kr</p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                        {/* Display error message for name if it exists */}
                        {errors.name && <div className="error">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        {/* Display error message for email if it exists */}
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                </div>
                <div className="form-group">
                    <select
                        name="topic"
                        value={topic}
                        onChange={handleChange}
                    >
                        <option value="">Topic</option>
                        <option value="orders">Orders</option>
                        <option value="shipping">Shipping</option>
                        <option value="return">Return</option>
                        <option value="promotions">Promotions</option>
                        <option value="partnership">Partnership</option>
                        <option value="adverse-events">Adverse Events</option>
                    </select>
                    {/* Display error message for topic if it exists */}
                    {errors.topic && <div className="error">{errors.topic}</div>}
                </div>
                <div className="form-group">
                    <textarea
                        rows="5"
                        placeholder="Enter your message"
                        name="message"
                        value={message}
                        onChange={handleChange}
                    />
                    {/* Display error message for message if it exists */}
                    {errors.message && <div className="error">{errors.message}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
