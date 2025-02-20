import React from 'react'
import { useState } from 'react';
import Loader from '../Loader';
import useUserProfileStore from '../../store/UserProfileStore'
import './AccountSettings.css'

const ChangePassword = () => {
    const { error, loading, updatePassword } = useUserProfileStore(); 
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await updatePassword(oldPassword, newPassword,)
        }
        catch (error) {
            console.error('Login error:', error);
          }
        setOldPassword('');
        setNewPassword('');
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

                <button type="submit" disabled={loading} className='mainbutton1'>{loading? (<Loader/>):("Update Password")}</button>
            </form>
        </div>
    );
};

export default ChangePassword;
