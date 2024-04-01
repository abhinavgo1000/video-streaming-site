export interface LikeState {
    isActive: boolean;
    changeCount: number;
}

export interface AppState {
    like: LikeState;
}