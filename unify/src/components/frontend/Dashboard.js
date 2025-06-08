import React from 'react';
import { useNavigate } from 'react-router-dom';

const stats = [
    { label: 'Total Sales', value: '$120,000', change: '+8%' },
    { label: 'Active Users', value: '1,250', change: '+3%' },
    { label: 'Open Orders', value: '320', change: '-2%' },
    { label: 'Support Tickets', value: '18', change: '+1%' },
];

const recentActivities = [
    { time: '10:30 AM', activity: 'Order #1234 shipped' },
    { time: '09:50 AM', activity: 'New user registered' },
    { time: '09:20 AM', activity: 'Invoice #5678 paid' },
    { time: '08:45 AM', activity: 'Support ticket closed' },
];

export default function Dashboard() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/home');
    };

    return (
        <div style={{ padding: 32, background: '#f4f6f8', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
            {/* Back button */}
            <button
                onClick={handleBack}
                style={{
                    marginBottom: 24,
                    background: 'transparent',
                    border: 'none',
                    color: '#4f8cff',
                    fontSize: 16,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <span style={{ fontSize: 20, marginRight: 8 }}>←</span> Back to Homepage
            </button>

            <h1 style={{ fontWeight: 700, marginBottom: 24 }}>UniFy Dashboard</h1>

            <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        style={{
                            flex: 1,
                            background: '#fff',
                            borderRadius: 12,
                            padding: 24,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <span style={{ color: '#888', fontSize: 14 }}>{stat.label}</span>
                        <span style={{ fontSize: 28, fontWeight: 600, margin: '8px 0' }}>{stat.value}</span>
                        <span style={{ color: stat.change.startsWith('+') ? '#27ae60' : '#c0392b', fontWeight: 500 }}>
                            {stat.change}
                        </span>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: 24 }}>
                <div style={{
                    flex: 2,
                    background: '#fff',
                    borderRadius: 12,
                    padding: 24,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Sales Overview</h2>
                    <div style={{
                        height: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#bbb'
                    }}>
                        {/* Placeholder for chart */}
                        <span>Chart goes here</span>
                    </div>
                </div>

                <div style={{
                    flex: 1,
                    background: '#fff',
                    borderRadius: 12,
                    padding: 24,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Recent Activity</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {recentActivities.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: 16 }}>
                                <span style={{ color: '#888', fontSize: 13, marginRight: 8 }}>{item.time}</span>
                                <span style={{ fontSize: 15 }}>{item.activity}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
