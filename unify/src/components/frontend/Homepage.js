import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this

const features = [
    {
        title: 'Dashboard',
        description: 'Get real-time insights and analytics for your business operations.',
        icon: '📊',
        path: '/dashboard', // ✅ Add route path
    },
    {
        title: 'Inventory Management',
        description: 'Track stock levels, orders, sales, and deliveries efficiently.',
        icon: '📦',
    },
    {
        title: 'Finance',
        description: 'Manage invoices, expenses, and financial reports with ease.',
        icon: '💰',
    },
    {
        title: 'HR & Payroll',
        description: 'Streamline employee management and payroll processing.',
        icon: '👥',
    },
    {
        title: 'CRM',
        description: 'Enhance customer relationships and sales pipelines.',
        icon: '🤝',
    },
];

export default function Homepage() {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            fontFamily: 'Segoe UI, sans-serif',
        }}>
            <header style={{
                padding: '2rem 0',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.85)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}>
                <h1 style={{ fontSize: '2.5rem', margin: 0, color: '#2d3a4b' }}>UniFy ERP</h1>
                <p style={{ fontSize: '1.25rem', color: '#4b5d6b', marginTop: '0.5rem' }}>
                    Modern, unified platform for all your business needs.
                </p>
                <button style={{
                    marginTop: '1.5rem',
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    background: '#4f8cff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(79,140,255,0.15)',
                    transition: 'background 0.2s',
                }}
                    onMouseOver={e => e.currentTarget.style.background = '#2563eb'}
                    onMouseOut={e => e.currentTarget.style.background = '#4f8cff'}
                >
                    Get Started
                </button>
            </header>
            <main style={{
                maxWidth: '1100px',
                margin: '3rem auto',
                padding: '0 1rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
            }}>
                {features.map((feature, idx) => {
                    const content = (
                        <div key={idx} style={{
                            background: '#fff',
                            borderRadius: '1rem',
                            boxShadow: '0 2px 12px rgba(44,62,80,0.07)',
                            padding: '2rem',
                            textAlign: 'center',
                            transition: 'transform 0.2s',
                            cursor: 'pointer',
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                            <h2 style={{ fontSize: '1.25rem', color: '#2d3a4b', margin: '0.5rem 0' }}>{feature.title}</h2>
                            <p style={{ color: '#6b7c93', fontSize: '1rem' }}>{feature.description}</p>
                        </div>
                    );

                    return feature.path ? (
                        <Link key={idx} to={feature.path} style={{ textDecoration: 'none' }}>
                            {content}
                        </Link>
                    ) : (
                        content
                    );
                })}
            </main>
            <footer style={{
                textAlign: 'center',
                padding: '2rem 0 1rem 0',
                color: '#8a99b3',
                fontSize: '0.95rem',
            }}>
                © {new Date().getFullYear()} UniFy ERP. All rights reserved.
            </footer>
        </div>
    );
}
