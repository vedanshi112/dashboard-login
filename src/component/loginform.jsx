import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/loginform.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const res = await axios.get('http://localhost:5000/info');
            const user = res.data.find(u =>
                u.name === formData.name &&
                u.email === formData.email &&
                u.password === formData.password
            );

            if (user) {
                localStorage.setItem('isLoggedIn', 'true');
                console.log('Logged In:', localStorage.getItem('isLoggedIn'));  // 👈 Add this line
                navigate('/dashboard');
            }


            else {
                setError('Invalid credentials. Try again.');
            }
        } catch (err) {
            setError('Server error. Please try later.');
        }
    };


    


    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // clear previous errors
        if (!formData.name || !formData.email || !formData.password) {
            setError('Please fill all fields');
            return;
        }
        handleLogin();
    };

    return (
        <div className='loginform'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label> <br />
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} /> <br /><br />
                <label htmlFor="email">Email :</label> <br />
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} /> <br /><br />
                <label htmlFor="password">Password :</label> <br />
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} /> <br /><br />
                <button type="submit" className='log'>Login</button>
            </form>
            {error && <p style={{ color: 'red', textAlign: 'center', paddingTop: '15px' }}>{error}</p>}
        </div>
    );
};

export default LoginForm;
