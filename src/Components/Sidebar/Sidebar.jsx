import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdDashboard, MdBusiness, MdHotel, MdMail, MdGroup, MdPhotoCamera, MdChevronRight, MdMenu } from "react-icons/md";
import Logo from '../../assets/logo.png'

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [dropdown, setDropdown] = useState({
    roomManagement: false,
    reservation: false,
    billing: false,
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
        className="md:hidden text-black text-3xl absolute top-4 left-4 z-50"
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
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <h1 className="ml-3 text-2xl font-semibold text-white ">Admin Panel</h1>
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

          {/* Room Management (Dropdown) */}
          <li>
            <div
              onClick={() => toggleDropdown("roomManagement")}
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg cursor-pointer"
            >
              <MdHotel className="inline-block mr-2" />
              Room Management
              <MdChevronRight
                className={`inline-block ml-2 transform transition-transform duration-300 ${dropdown.roomManagement ? "rotate-90" : ""}`}
              />
            </div>
            {dropdown.roomManagement && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/RoomInventory"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    Room Inventory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/RoomStatus"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    Room Status
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Reservation (Dropdown) */}
          <li>
            <div
              onClick={() => toggleDropdown("reservation")}
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg cursor-pointer"
            >
              <MdBusiness className="inline-block mr-2" />
              Reservation
              <MdChevronRight
                className={`inline-block ml-2 transform transition-transform duration-300 ${dropdown.reservation ? "rotate-90" : ""}`}
              />
            </div>
            {dropdown.reservation && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/RoomBooking"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    Room Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Check-in"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    Check-in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Check-out"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    Check-out
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Billing */}
          <li>
            <div
              onClick={() => toggleDropdown("billing")}
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg cursor-pointer"
            >
              <MdBusiness className="inline-block mr-2" />
              Billing
              <MdChevronRight
                className={`inline-block ml-2 transform transition-transform duration-300 ${dropdown.billing ? "rotate-90" : ""}`}
              />
            </div>
            {dropdown.billing && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/Generate-bill"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    Generate Bill
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Invoices"
                    className="block p-2 pl-4 text-white hover:bg-green-600 transition duration-300"
                  >
                    Invoices
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Housekeeping */}
          <li>
            <Link
              to="/Housekeeping"
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Housekeeping
            </Link>
          </li>

          {/* Maintenance */}
          <li>
            <Link
              to="/Maintenance"
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Maintenance
            </Link>
          </li>

          {/* Reports */}
          <li>
            <Link
              to="/Reports"
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Reports
            </Link>
          </li>

          {/* Feedback */}
          <li>
            <Link
              to="/Feedback"
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Feedback
            </Link>
          </li>

          {/* User Profile */}
          <li>
            <Link
              to="/User-Profile"
              className="block p-3 rounded-lg text-white font-medium text-lg bg-slate-800 hover:bg-green-600 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <MdGroup className="inline-block mr-2" />
              User Profile
            </Link>
          </li>

          {/* Reply Queries */}
          <li>
            <Link
              to="/Reply-queries"
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
