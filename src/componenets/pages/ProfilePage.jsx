import React, { useEffect } from "react";
import { actions } from "../../actions";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import MyPosts from "../profile/MyPosts";
import ProfileInfo from "../profile/ProfileInfo";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth } = useAuth();
  console.log(auth);
  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `http://localhost:3000/profile/${auth?.user?.id}`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, []);
  if (state?.loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <ProfileInfo />
      <MyPosts />
    </>
  );
}
