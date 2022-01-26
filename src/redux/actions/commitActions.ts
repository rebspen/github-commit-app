import { Commits } from '../reducers/commitReducer';

export interface addCommits {
  readonly type: 'ADD-COMMITS';
  payload: Commits[];
}

export type commitActions = addCommits;
