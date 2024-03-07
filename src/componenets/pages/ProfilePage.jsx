import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { api } = useAxios();
  const { auth } = useAuth();
  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `http://localhost:3000/profile/${auth?.user?.id}`
        );
        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }
  return <div className="color-red">{user?.firstName}</div>;
}
