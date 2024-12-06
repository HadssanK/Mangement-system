import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdDashboard, MdGroup, MdBusiness, MdPhotoCamera, MdMail, MdChevronRight, MdMenu } from "react-icons/md";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [dropdown, setDropdown] = useState({
    manage: false,
    gallery: false,
  });

  // Function to toggle dropdown
  const toggleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Function to toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-white text-3xl absolute top-4 left-4 z-50"
      >
        <MdMenu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 shadow-lg p-6 bg-gradient-to-r from-slate-900 to-slate-700 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center mb-8">
          <span className="text-3xl font-bold text-purple-500">⚡</span>
          <h1 className="ml-3 text-2xl font-semibold text-white">Admin Panel</h1>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-4">
          {/* Dashboard */}
          <li>
            <Link
              to="/dashboard"
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <MdDashboard className="inline-block mr-2" />
              Dashboard
            </Link>
          </li>

          {/* Manage (Dropdown) */}
          <li>
            <div
              onClick={() => toggleDropdown("manage")}
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg cursor-pointer"
            >
              <MdGroup className="inline-block mr-2" />
              Manage
              <MdChevronRight
                className={`inline-block ml-2 transform transition-transform duration-300 ${dropdown.manage ? "rotate-90" : ""}`}
              />
            </div>
            {dropdown.manage && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/manage-donations"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    <MdBusiness className="inline-block mr-2" />
                    Manage Donations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manage-partners"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    <MdGroup className="inline-block mr-2" />
                    Manage Partners
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Gallery Management (Dropdown) */}
          <li>
            <div
              onClick={() => toggleDropdown("gallery")}
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg cursor-pointer"
            >
              <MdPhotoCamera className="inline-block mr-2" />
              Gallery Management
              <MdChevronRight
                className={`inline-block ml-2 transform transition-transform duration-300 ${dropdown.gallery ? "rotate-90" : ""}`}
              />
            </div>
            {dropdown.gallery && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/gallery-management"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    <MdPhotoCamera className="inline-block mr-2" />
                    Manage Gallery
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other Pages */}
          <li>
            <Link
              to="/reply-queries"
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <MdMail className="inline-block mr-2" />
              Reply Queries
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
