import React from 'react'
import { useState } from 'react';
import { useUserProfileStore } from '../../store/UserProfile'
import './AccountSettings.css'

const ChangePassword = () => {
    const { userProfile, setUserProfile } = useUserProfileStore();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (oldPassword !== userProfile.password) {
            setError('Old password is incorrect');
            return;
        }
        
        setUserProfile({
            ...userProfile,
            password: newPassword
        });
        setOldPassword('');
        setNewPassword('');
        setError('');
        alert('Password updated successfully');
    };

    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Change Password</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='oldpass'>Old Password <span>*</span></label>
                        <input 
                            type='password' 
                            value={oldPassword} 
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='newpass'>New Password <span>*</span></label>
                        <input 
                            type='password' 
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className='error'>{error}</p>}
                </div>

                <button className='mainbutton1'>Update Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
