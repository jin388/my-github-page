import { memo } from "react";
import { Octava } from "../../types/types";
import Key from "../Key/Key";
import cls from "./Keys.module.scss";

interface SoundKey {
    soundKeys: Octava[];
}

const Keys = memo((props: SoundKey) => {
    const { soundKeys } = props;

    const content = soundKeys.map((key) => {
        return key.diez ? (
            <Key
                key={key.name}
                srcWhite={key.url}
                srcBlack={key.diez.url}
                keycapWhite={key.keycap}
                keycapBlack={key.diez.keycap}
                nameWhite={key.name}
                nameBlack={key.diez.name}
            />
        ) : (
            <Key
                key={key.name}
                srcWhite={key.url}
                keycapWhite={key.keycap}
                nameWhite={key.name}
            />
        );
    });

    return <div className={cls.keys}>{content}</div>;
});

export default Keys;
