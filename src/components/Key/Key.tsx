import cls from "./Key.module.scss";
import { usePlay } from "../../hooks/usePlay";
import { useKeyPress } from "../../hooks/useKeyPress";
import { memo, useCallback, useState } from "react";
import Keycap from "../Keycap/Keycap";
import { useAppDispatch } from "../../app/StoreProvider/hooks";

interface KeyProps {
    srcWhite: string;
    srcBlack?: string;
    keycapWhite: string;
    keycapBlack?: string;
    nameWhite: string;
    nameBlack?: string;
}

const Key = memo((props: KeyProps) => {
    const {
        srcWhite,
        srcBlack,
        keycapWhite,
        keycapBlack,
        nameWhite,
        nameBlack,
    } = props;
    const onPlaySoundWhite = usePlay(srcWhite);
    const onPlaySoundBlack = usePlay(srcBlack);
    const { whiteActive, blackActive } = useKeyPress({
        keycapBlack,
        keycapWhite,
        nameWhite,
        nameBlack,
        onPlaySoundWhite,
        onPlaySoundBlack,
    });
    const [whiteClick, setWhiteClick] = useState(false);
    const [blackClick, setBlackClick] = useState(false);

    const dispatch = useAppDispatch();

    const onMouseWhiteDown = useCallback(() => {
        dispatch({ type: "key/addSounds", payload: nameWhite });
        onPlaySoundWhite();
        setWhiteClick(true);
    }, [dispatch, nameWhite, onPlaySoundWhite]);

    const onMouseWhiteUp = useCallback(() => {
        dispatch({ type: "key/removeSounds" });
        setWhiteClick(false);
    }, [dispatch]);

    const onMouseBlackDown = useCallback(() => {
        dispatch({ type: "key/addSounds", payload: nameBlack });
        onPlaySoundBlack();
        setBlackClick(true);
    }, [dispatch, nameBlack, onPlaySoundBlack]);

    const onMouseBlackUp = useCallback(() => {
        dispatch({ type: "key/removeSounds" });
        setBlackClick(false);
    }, [dispatch]);

    return (
        <div className={cls.key}>
            <Keycap
                keycap={keycapWhite}
                name={nameWhite}
                color="white"
                clicked={whiteClick}
                active={whiteActive}
                onMouseDown={onMouseWhiteDown}
                onMouseUp={onMouseWhiteUp}
            />
            {nameBlack && srcBlack && keycapBlack && (
                <Keycap
                    keycap={keycapBlack}
                    name={nameBlack}
                    color="black"
                    clicked={blackClick}
                    active={blackActive}
                    onMouseDown={onMouseBlackDown}
                    onMouseUp={onMouseBlackUp}
                />
            )}
        </div>
    );
});

export default Key;
