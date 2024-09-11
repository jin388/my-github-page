import cls from "./Sound.module.scss";

interface SoundProps {
    sound: string;
    children: React.ReactNode;
}

const Sound = (props: SoundProps) => {
    const { children, sound } = props;
    const clsSound = sound.includes("#")
        ? sound.replace("#", "") + "Diez"
        : sound;

    return <h1 className={cls[clsSound]}>{children}</h1>;
};

export default Sound;
