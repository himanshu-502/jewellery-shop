import React from 'react'
import { useState } from 'react';
import { useUserProfileStore } from '../../store/UserProfile'
import './AccountSettings.css'


const AccountSettings = () => {
  const { userProfile, setUserProfile } = useUserProfileStore(); // Destructure updateUserProfile from the store
  const [firstName, setFirstName] = useState(userProfile.firstName);
  const [lastName, setLastName] = useState(userProfile.lastName);
  const [email, setEmail] = useState(userProfile.email);
  const [phone, setPhone] = useState(userProfile.phone);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Update the store with the new values, excluding password
    setUserProfile({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone, 
      password: userProfile.password
    });
  };

  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>

      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>
            First Name <span className='mandatory'>*</span>
          </label>
          <input 
            type='text' 
            name='firstName' 
            id='firstName' 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='lastName'>
            Last Name <span className='mandatory'>*</span>
          </label>
          <input 
            type='text' 
            name='lastName' 
            id='lastName' 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
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
            value={email} 
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
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required
          />
        </div>
        <button type='submit' className='mainbutton1'>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountSettings;
