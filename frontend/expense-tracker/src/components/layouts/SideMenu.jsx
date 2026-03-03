import React, { useContext, useState } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";
import Modal from "./Modal";
import DeleteAlert from "./DeleteAlert";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleClick = (route) => {
    if (route === "/logout") {
      setShowLogoutConfirm(true);
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    setShowLogoutConfirm(false);
    navigate("/login");
  };

  return (
    <>
      <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-10">
        <div className="flex flex-col items-center justify-center gap-3 mt-3  mb-7">
          {user?.profileImageUrl ? (
            <img
              src={user?.profileImageUrl || ""}
              alt="Profile Image"
              className="w-20 h-20  bg-slate-400 rounded-full "
            />
          ) : (
            <CharAvatar
              fullName={user?.fullName}
              width="w-20"
              height="h-20"
              style="text-xl"
            />
          )}
          <h5 className="font-medium leading-6 text-gray-950">
            {user?.fullName || " "}
          </h5>
        </div>

        {SIDE_MENU_DATA.map((item, index) => {
          return (
            <button
              key={`menu_${index}`}
              className={`w-full flex items-center gap-4 text-[15px] ${activeMenu === item.label
                ? "text-white bg-primary"
                : "text-gray-700 hover:bg-purple-50"
                } py-3 px-6 rounded-lg mb-3 transition`}
              onClick={() => handleClick(item.path)}
            >
              <item.icon className="text-xl" />
              {item.label}
            </button>
          );
        })}
      </div>

      <Modal
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        title="Confirm Logout"
      >
        <DeleteAlert
          content="Are you sure? You want to logout?"
          onDelete={handleLogout}
          onCancel={() => setShowLogoutConfirm(false)}
          confirmText="Yes"
          cancelText="No"
        />
      </Modal>
    </>
  );
};

export default SideMenu;
