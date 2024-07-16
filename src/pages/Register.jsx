import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
const [name, setName] = useState('');
const [surname, setSurname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Registered
        const user = userCredential.user;
        alert('User registered:', user);
    })
        .catch((error) => {
        alert('Error registering:', error);
    });
};

return (
    <div className="registerContainer">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="LastName" value={surname} onChange={(e) => setSurname(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    </div>
    );
};

export default Register;
