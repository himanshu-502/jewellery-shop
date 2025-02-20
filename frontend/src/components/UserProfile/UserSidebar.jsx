import React from 'react'
import { Link } from 'react-router-dom'
import './UserSidebar.css'
import useUserProfileStore from '../../store/UserProfileStore';

const UserSidebar = ({ activepage }) => {
  const { role } = useUserProfileStore();

  const menuItems = role === 'admin'
    ? [
        { 
          page: 'accountsettings', 
          label: 'Account Settings',
          path: '/user/accountsettings',
          icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                ), 
        },
        { 
          page: 'changepassword', 
          label: 'Change Password', 
          path: '/user/changepassword',
          icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              ), 
        },
        { 
          page: 'manageusers', 
          label: 'Manage Users', 
          path: '/user/manageusers',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5M2 20h5m5 0h5m-5 0v-4a4 4 0 00-8 0v4m8 0v-4a4 4 0 118 0v4M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),  
        },
        { 
          page: 'manageproducts', 
          label: 'Manage Products', 
          path: '/user/manageproducts',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l9-4.5 9 4.5M3 7.5v9l9 4.5m-9-13.5l9 4.5m0-9v9m9-4.5v9m-9 4.5l9-4.5m-9 4.5V12m9 4.5l-9-4.5" />
            </svg>
          ), 
         },
        // { 
        //   page: 'manageorders', 
        //   label: 'Manage Orders', 
        //   path: '/user/manageorders',
        //   icon: (
        //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        //       </svg>
        //       ), 
        //  },
        // // { 
        //   page: 'customerreviews', 
        //   label: 'Customer Reviews', 
        //   path: '/user/customerreviews',
        //   icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        //       <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-3.25 1.71a.75.75 0 01-1.09-.79l.62-3.61-2.63-2.57a.75.75 0 01.41-1.28l3.64-.53 1.63-3.29a.75.75 0 011.34 0l1.63 3.29 3.64.53a.75.75 0 01.41 1.28l-2.63 2.57.62 3.61a.75.75 0 01-1.09.79L12 17.25z" />
        //     </svg>
        //   ), 
        // }
      ]
    : [
        { 
          page: 'accountsettings', 
          label: 'Account Settings', 
          path: '/user/accountsettings',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ), 
        },
        { 
          page: 'changepassword', 
          label: 'Change Password', 
          path: '/user/changepassword',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ), 
         },
        { 
          page: 'address', 
          label: 'Address', 
          path: '/user/address',
          icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              ), 
         },
        { 
          page: 'myorders', 
          label: 'My Orders', 
          path: '/user/myorders',
          icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
          ), 
         },
        { 
          page: 'myreviews', 
          label: 'My Reviews', 
          path: '/user/myreviews',
          icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-3.25 1.71a.75.75 0 01-1.09-.79l.62-3.61-2.63-2.57a.75.75 0 01.41-1.28l3.64-.53 1.63-3.29a.75.75 0 011.34 0l1.63 3.29 3.64.53a.75.75 0 01.41 1.28l-2.63 2.57.62 3.61a.75.75 0 01-1.09.79L12 17.25z" />
              </svg>
          ), 
        }
      ];

  return (
    <div className='usersidebar'>
      {menuItems.map(({ page, label, path, icon }) => (
        activepage === page ? (
          <div key={page} className='s1 active'>
            {icon}
            <span>{label}</span>
          </div>
        ) : (
          <Link key={page} to={path} className='stylenone'>
            <div className='s1'>
              {icon}
              <span>{label}</span>
            </div>
          </Link>
        )
      ))}
    </div>
  );
};

export default UserSidebar;
