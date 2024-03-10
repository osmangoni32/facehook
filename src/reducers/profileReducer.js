import { actions } from "../actions";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};
const profileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.profile.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        user: action.data.user,
        post: action.data.posts,
      };
    }
    case actions.profile.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    case actions.profile.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
    case actions.profile.USER_DATA_EDITED: {
      return {
        ...state,
        loading: false,
        user: action.data,
      };
    }
    case actions.profile.IMAGE_UPDATED: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          avatar: action.data.avatar,
        },
      };
    }
  }
};
export { initialState, profileReducer };
