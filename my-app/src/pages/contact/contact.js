import { useState } from "react";
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!emailPattern.test(formData.email)) newErrors.email = "Invalid email address.";
        if (!formData.topic) newErrors.topic = "Please select a topic.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            // Handle form submission here
            console.log('Form submitted', formData);
            // Clear form
            setFormData({ name: '', email: '', topic: '', message: '' });
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
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <div className="error">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                </div>
                <div className="form-group">
                    <select
                        name="topic"
                        value={formData.topic}
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
                    {errors.topic && <div className="error">{errors.topic}</div>}
                </div>
                <div className="form-group">
                    <textarea
                        rows="5"
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <div className="error">{errors.message}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
