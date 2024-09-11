import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface KeyState {
    sounds: string[];
}

const initialState: KeyState = {
    sounds: [],
};

export const keySlice = createSlice({
    name: "key",
    initialState,
    reducers: {
        addSounds: (state, action: PayloadAction<string>) => {
            state.sounds.push(action.payload);
        },
        removeSounds: (state) => {
            state.sounds = [];
        },
    },
});

export const { addSounds, removeSounds } = keySlice.actions;

export default keySlice.reducer;
