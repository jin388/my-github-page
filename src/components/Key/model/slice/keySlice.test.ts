import { addSounds, keySlice, KeyState, removeSounds } from "./keySlice";

describe("keySlice", () => {
    it("should add sounds", () => {
        const state = keySlice.reducer(undefined, addSounds("sound1"));
        expect(state.sounds).toEqual(["sound1"]);
    });

    it("should remove sounds", () => {
        const state = keySlice.reducer(undefined, removeSounds());
        expect(state.sounds).toEqual([]);
    });

    it("should add and remove sounds", () => {
        const state = keySlice.reducer(undefined, addSounds("sound1"));
        expect(state.sounds).toEqual(["sound1"]);
        const state2 = keySlice.reducer(state as KeyState, removeSounds());
        expect(state2.sounds).toEqual([]);
    });
})