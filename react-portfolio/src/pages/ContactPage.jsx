import { useState } from "react";

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    
        switch(name) {
            case 'name':
                setName(value)
                if (value === '') {
                    setErrors(prevErrors => ({
                        ...prevErrors,
                        name: 'This field is required'
                    }));
                } else {
                    setErrors(prevErrors => ({
                        ...prevErrors,
                        name: null
                    }));
                }
                break
            case 'email':
                setEmail(value)
                if (value === '') {
                    setErrors(prevErrors => ({
                        ...prevErrors,
                        email: 'This field is required'
                    }));
                } else {
                    setErrors(prevErrors => ({
                        ...prevErrors,
                        email: null
                    }));
                }
                break
            case 'message':
                setMessage(value)
                if (value === '') {
                    setErrors(prevErrors => ({
                        ...prevErrors,
                        message: 'This field is required'
                    }));
                } else {
                    setErrors(prevErrors => ({
                        ...prevErrors,
                        message: null
                    }));
                }
                break
        }
    };

    const handleFormSubmit = (e) => {
        const regex = /.+@.+\..+/
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (!regex.test(email)) {
            return alert('incorrect email format')
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="">
            <h1 className="">Contact Me</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form-element">
                    <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your name here!"
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className="form-element">
                    <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Valid Email"
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="form-element">
                    <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="What should I know?"
                    />
                    {errors.message && <span>{errors.message}</span>}
                </div>
                <button type="submit" className="form-element">
                Submit
                </button>
            </form>
        </div>
    );
}

export default ContactPage;