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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '379px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>UniFy</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    style={{ marginBottom: '15px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '90%' }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    style={{ marginBottom: '15px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '90%' }}
                />
                <button type="submit" style={{ padding: '8px 30px', borderRadius: '50px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer', alignSelf: 'center' }}>Login</button>
                <p style={{ marginTop: '10px', textAlign: 'center' }}>
                    Don't have an account? <a href="/signup" style={{ color: '#007BFF' }}>Sign up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;