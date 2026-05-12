import React from 'react';
import { SignupForm } from '../_components/signup-form';

const RegisterPage = ({ params: {role} }) => {
    return (
        <div className='w-full flex-col h-screen flex items-center justify-center bg-slate-950 text-slate-100'>
            <div className='container'>
                <SignupForm role={role} />                
            </div>
            
        </div>
    );
};

export default RegisterPage;