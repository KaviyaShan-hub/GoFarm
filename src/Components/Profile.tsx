import React, { useState } from 'react';
import Header from './Header';
import LeftNavigator from './LeftNavigator';
import ProfileContent from './RightNavComponent/ProfileContent';
import ChangePasswordContent from './RightNavComponent/ChangePasswordContent';
import OrderComponent from './RightNavComponent/OrderComponent';
import AddressBookComponent from './RightNavComponent/AddressBookComponent';
import NotifyComponent from './RightNavComponent/NotifyComponent';
import CustomerSupportComponent from './RightNavComponent/CustomerSupportComponent';
import SettingComponent from './RightNavComponent/SettingComponent';
import LogoutComponent from './RightNavComponent/LogoutComponent';

const Profile = () => {
  const [activeContent, setActiveContent] = useState('profile'); // Default to 'profile'
  const [activeItem, setActiveItem] = useState('profile');

  const handleItemClick = (item: string) => {
    setActiveContent(item);
    setActiveItem(item);
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-[auto_1fr]">
        <LeftNavigator activeItem={activeItem} onItemClick={handleItemClick} />
        <div>
          {activeContent === 'profile' && <ProfileContent name={'Profile'} />}
          {activeContent === 'changePassword' && <ChangePasswordContent />}
          {activeContent === 'orders' && <OrderComponent />}
          {activeContent === 'addressBook' && <AddressBookComponent />}
          {activeContent === 'notifications' && <NotifyComponent />}
          {activeContent === 'customerSupport' && <CustomerSupportComponent />}
          {activeContent === 'settings' && <SettingComponent />}
          {activeContent === 'logout' && <LogoutComponent />}
          {/* Add more conditions here for other content sections */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

