import { commitActions } from "../actions/commitActions";

export interface Commits {
  author: string;
  commit: string;
  merge: boolean;
  message: string;
  created: string;
}

type CommitState = {
  commits: Commits[] | [];
  hasError: boolean;
};

const initialState: CommitState = {
  commits: [],
  hasError: false,
};

const commitReducer = (
  state: CommitState = initialState,
  action: commitActions
) => {
  switch (action.type) {
    case "ADD-COMMITS":
      return {
        ...state,
        commits: action.payload,
      };
    default:
      return state;
  }
};
export default commitReducer;
