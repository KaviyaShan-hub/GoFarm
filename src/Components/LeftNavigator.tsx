// LeftNavigator Component
import React from "react";
import profileImg from "../assets/profile.png";
import passwordImg from "../assets/password.png";
import notifyImg from "../assets/images-f2h/images/Notification.png";
import AddressImg from "../assets/map-book.png";
import custImg from "../assets/customersupport.png";
import settingImg from "../assets/settings(1).png";
import logoutImg from "../assets/logout.png";
import userImg from "../assets/user.png";
import greenArrow from "../assets/next@2x.png";
import greenProfile from "../assets/GreenProfile.png";
import greenPassword from "../assets/GreenPassword.png";
import greenOrder from "../assets/GreenOrder.png";
import greenAddress from "../assets/GreenAddress.png";
import greenBell from "../assets/GreenBell.png";
import greenheadphone from "../assets/GreenHeadphone.png";
import greenSetting from "../assets/GreenSettings.png";
import greenLogout from "../assets/GreenLogout.png";

const menuItems = [
  { id: 'profile', label: 'Profile', icon: profileImg, activeIcon: greenProfile },
  { id: 'changePassword', label: 'Change Password', icon: passwordImg, activeIcon: greenPassword },
  { id: 'orders', label: 'My Orders', icon: profileImg, activeIcon: greenOrder },
  { id: 'addressBook', label: 'Address Book', icon: AddressImg, activeIcon: greenAddress },
  { id: 'notifications', label: 'Notifications', icon: notifyImg, activeIcon: greenBell },
  { id: 'customerSupport', label: 'Customer Support', icon: custImg, activeIcon: greenheadphone },
  { id: 'settings', label: 'Settings', icon: settingImg, activeIcon: greenSetting },
  { id: 'logout', label: 'Logout', icon: logoutImg, activeIcon: greenLogout },
];

interface LeftNavigatorProps {
  activeItem: string;  // Define the type as string
  onItemClick: (item: string) => void;  // Function type accepting a string argument
}

const LeftNavigator: React.FC<LeftNavigatorProps>= ({ activeItem, onItemClick }) => {
  return (
    <div className="h-screen w-60 mt-1 bg-white shadow-lg">
      <div className="flex justify-center">
        <div className="flex flex-col items-start mt-10">
          <div className="mb-6">
            <img className="h-24 w-24" src={userImg} alt="User Profile" />
          </div>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center mb-4 gap-2 cursor-pointer"
              onClick={() => onItemClick(item.id)}
            >
              <img
                className="h-5 w-5"
                src={activeItem === item.id && item.activeIcon ? item.activeIcon : item.icon}
                alt={item.label}
              />
              <div className={activeItem === item.id ? 'text-greenColor' : 'text-gray-600'}>
                {item.label}
              </div>
              {activeItem === item.id && item.activeIcon && (
                <img className="h-2 w-2" src={greenArrow} alt="Active Indicator" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftNavigator;
