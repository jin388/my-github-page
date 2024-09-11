import { soundKeys } from "../../utils/utils";
import Keys from "../Keys/Keys";
import Screen from "../Screen/Screen";
import cls from "./Piano.module.scss";
import { useAppSelector } from "../../app/StoreProvider/hooks";
import { getSounds } from "../Key/model/selectors/getSounds";

const Piano = () => {
    const sounds = useAppSelector(getSounds);

    return (
        <div className={cls.piano}>
            <Screen sounds={sounds} />
            <Keys soundKeys={soundKeys} />
        </div>
    );
};

export default Piano;
