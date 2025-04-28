import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Add your login logic here
    };

    return (
        <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form className="login-form" onSubmit={handleSubmit} style={{ width: '379px', height: '322px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>UniFy</h2>
                <div className="form-group" style={{ width: '100%', marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div className="form-group" style={{ width: '100%', marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <button type="submit" className="login-button" style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</button>
                <p className="signup-link" style={{ marginTop: '10px', textAlign: 'center' }}>
                    Don't have an account? <a href="/signup" style={{ color: '#007BFF', textDecoration: 'none' }}>Sign up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;