export interface IIncrementCountAction {
    readonly type: 'INCREMENT';
}
export interface IDecrementCountAction {
    readonly type: 'DECREMENT';
}
export type actions1 =
| IIncrementCountAction
| IDecrementCountAction