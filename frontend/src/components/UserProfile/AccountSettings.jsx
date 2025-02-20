import React from 'react'
import { useState } from 'react';
import Loader from '../Loader';
import useUserProfileStore from '../../store/UserProfileStore'
import './AccountSettings.css'


const AccountSettings = () => {
  const { error, loading, name, email, phone, updateUserProfile } = useUserProfileStore(); // Destructure updateUserProfile from the store
  const [userName, setName] = useState(name);
  const [userEmail, setEmail] = useState(email);
  const [userPhone, setPhone] = useState(phone);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Update the store with the new values, excluding password
    try{
      await updateUserProfile({
      name: userName,
      email: userEmail,
      phone: userPhone,
    })}
    catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>
      {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
      <form className='form' onSubmit={handleSubmit}>
        
        <div className='form-group'>
          <label htmlFor='name'>
            Name <span className='mandatory'>*</span>
          </label>
          <input 
            type='text' 
            name='name' 
            id='name' 
            value={userName} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>
            Email <span className='mandatory'>*</span>
          </label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            value={userEmail} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>
            Phone<span className='mandatory'>*</span>
          </label>
          <input 
            type='text' 
            name='phone' 
            id='phone' 
            value={userPhone} 
            onChange={(e) => setPhone(e.target.value)} 
            required
          />
        </div>
          <button type='submit' className='mainbutton1' disabled={loading}>
            {loading ? (<Loader/>): "Save Changes"}
          </button>
      </form>
    </div>
  );
};

export default AccountSettings;
