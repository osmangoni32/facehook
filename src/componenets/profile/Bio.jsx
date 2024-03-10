import React, { useState } from "react";
import { actions } from "../../actions";
import { api } from "../../api";
import CheckIcon from "../../assets/icons/close.svg";
import EditIcon from "../../assets/icons/edit.svg";
import { useProfile } from "../../hooks/useProfile";

export default function Bio() {
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [edit, setEdit] = useState(false);
  const handleEditBio = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
      }
      setEdit(false);
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!edit ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
        ) : (
          <textarea
            className="p-2 leading-[188%] text-gray-600 lg:text-lg rounded-md"
            value={bio}
            rows={4}
            cols={55}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>
      {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button -->*/}
      {!edit ? (
        <button className="flex-center h-7 w-7 rounded-full">
          <img
            src={EditIcon}
            alt="Edit"
            onClick={() => {
              setEdit(true);
            }}
          />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleEditBio}
        >
          <img src={CheckIcon} alt="check" />
        </button>
      )}
    </div>
  );
}
