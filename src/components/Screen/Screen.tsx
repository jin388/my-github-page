import Sound from "../Sound/Sound";
import cls from "./Screen.module.scss";

interface ScreenProps {
    sounds: string[];
}

const Screen = (props: ScreenProps) => {
    const { sounds } = props;
    const content = sounds.map((sound) => {
        return (
            <Sound
                key={sound}
                sound={sound}
            >
                {sound}
            </Sound>
        );
    });
    return <div className={cls.screen}>{content}</div>;
};

export default Screen;
