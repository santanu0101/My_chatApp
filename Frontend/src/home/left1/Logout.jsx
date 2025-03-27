import React, { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie"

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true)
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false)
      alert("Logout Successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
      <div className="p-3 align-bottom">
            <button>
              <RiLogoutBoxLine className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" onClick={handleLogout}/>
            </button>
          </div>
    </div>
  );
}

export default Logout;
