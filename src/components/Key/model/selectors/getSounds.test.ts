import { RootState } from "../../../../app/StoreProvider/store";
import { getSounds } from "./getSounds";

describe("getSounds", () => {
    it("should return empty array", () => {
        const state = {
            key: {
                sounds: [],
            },
        };
        const result = getSounds(state as RootState);
        expect(result).toEqual([]);
    });

    it("should return sounds array", () => {
        const state = {
            key: {
                sounds: ["sound1", "sound2"],
            },
        };
        const result = getSounds(state as RootState);
        expect(result).toEqual(["sound1", "sound2"]);
    });
});

