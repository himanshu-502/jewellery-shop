import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './UserProfile.css'
import Loader from '../../components/Loader'
import UserSidebar from '../../components/UserProfile/UserSidebar'
import AccountSettings from '../../components/UserProfile/AccountSettings'
import ChangePassword from '../../components/UserProfile/ChangePassword'
import UserAddress from '../../components/UserProfile/UserAddress'
import useLoginStore from '../../store/LoginStore'
import useUserProfileStore from '../../store/UserProfileStore'
import ManageProducts from '../../components/UserProfile/ManageProducts'
import MyReviews from '../../components/UserProfile/MyReviews'
import ManageUsers from '../../components/UserProfile/ManageUsers'
import MyOrders from '../../components/UserProfile/MyOrders'

const UserProfile = () => {
  const navigate = useNavigate();
  const { isSignedIn, role } = useUserProfileStore();
  const { logoutUser, loading } = useLoginStore();
  const { activepage } = useParams();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/login');
    }
  }, [isSignedIn, navigate]);

  if (loading) {
    return <Loader />;
  }

  const adminPages = ['accountsettings', 'changepassword', 'manageusers', 'manageproducts', 'manageorders'];
  const userPages = ['accountsettings', 'changepassword', 'address', 'myorders', 'myreviews'];

  const allowedPages = role === 'admin' ? adminPages : userPages;

  return (
    <div className='userprofile'>
      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage} />
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-all"
          >
            Logout
          </button>
        </div>
        <div className='right'>
          {allowedPages.includes(activepage) && (
            <>
              {activepage === 'accountsettings' && <AccountSettings />}
              {activepage === 'changepassword' && <ChangePassword />}
              {activepage === 'address' && <UserAddress />}
              {activepage === 'manageproducts' && <ManageProducts />}
              {activepage === 'myreviews' && <MyReviews />} 
              {activepage === 'manageusers' && <ManageUsers />}
              {activepage === 'myorders' && <MyOrders /> }
              {/* {activepage === 'manageorders' && <ManageOrders />} */}
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile