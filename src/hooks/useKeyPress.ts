import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../app/StoreProvider/hooks";

interface KeyPressProps {
    keycapWhite: string;
    keycapBlack?: string;
    nameWhite: string;
    nameBlack?: string;
    onPlaySoundBlack: () => void;
    onPlaySoundWhite: () => void;
}

export function useKeyPress({
    keycapBlack,
    keycapWhite,
    nameWhite,
    nameBlack,
    onPlaySoundBlack,
    onPlaySoundWhite,
}: KeyPressProps) {
    const [whiteActive, setWhiteActive] = useState(false);
    const [blackActive, setBlackActive] = useState(false);
    const dispatch = useAppDispatch();

    const onKeyDownWhite = useCallback(
        (e: KeyboardEvent) => {
            if (e.repeat) return;
            if (e.key.toLowerCase() === keycapWhite) {
                dispatch({ type: "key/addSounds", payload: nameWhite });
                setWhiteActive(true);
                onPlaySoundWhite();
            }
        },
        [dispatch, keycapWhite, nameWhite, onPlaySoundWhite]
    );

    const onKeyDownBlack = useCallback(
        (e: KeyboardEvent) => {
            if (e.repeat) return;
            if (e.key.toLowerCase() === keycapBlack && nameBlack) {
                dispatch({ type: "key/addSounds", payload: nameBlack });
                setBlackActive(true);
                onPlaySoundBlack();
            }
        },
        [dispatch, keycapBlack, nameBlack, onPlaySoundBlack]
    );

    const onKeyUpWhite = useCallback(() => {
        dispatch({ type: "key/removeSounds" });
        setWhiteActive(false);
    }, [dispatch]);

    const onKeyUpBlack = useCallback(() => {
        dispatch({ type: "key/removeSounds" });
        setBlackActive(false);
    }, [dispatch]);

    useEffect(() => {
        if (keycapBlack) {
            document.addEventListener("keydown", onKeyDownWhite);
            document.addEventListener("keydown", onKeyDownBlack);

            document.addEventListener("keyup", onKeyUpWhite);
            document.addEventListener("keyup", onKeyUpBlack);

            return () => {
                document.removeEventListener("keydown", onKeyDownWhite);
                document.removeEventListener("keydown", onKeyDownBlack);

                document.removeEventListener("keyup", onKeyUpWhite);
                document.removeEventListener("keyup", onKeyUpBlack);
            };
        }
        document.addEventListener("keydown", onKeyDownWhite);
        document.addEventListener("keyup", onKeyUpWhite);

        return () => {
            document.removeEventListener("keydown", onKeyDownWhite);
            document.removeEventListener("keyup", onKeyUpWhite);
        };
    }, [
        keycapBlack,
        onKeyDownBlack,
        onKeyDownWhite,
        onKeyUpBlack,
        onKeyUpWhite,
    ]);

    return {
        whiteActive,
        blackActive,
    };
}
