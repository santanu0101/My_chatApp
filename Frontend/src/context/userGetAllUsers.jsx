import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function userGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/getUserProfile", {
          Credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error in userGetAllUsers" + error);
      }
    };
    getUsers();
  }, []);

  return [allUsers, loading];
}

export default userGetAllUsers;
