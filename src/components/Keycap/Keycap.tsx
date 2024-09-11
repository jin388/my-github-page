import { memo } from "react";
import cls from "./Keycap.module.scss";
import { useDevice } from "../../hooks/useDevice";

interface KeycapProps {
    keycap: string;
    name: string;
    color: "white" | "black";
    clicked: boolean;
    active: boolean;
    onMouseDown: () => void;
    onMouseUp: () => void;
}

const Keycap = memo((props: KeycapProps) => {
    const { keycap, active, name, onMouseDown, onMouseUp, color, clicked } =
        props;
    const isMobile = useDevice();
    const clsName = color === "white" ? name : name.replace("#", "") + "Diez";

    if (isMobile) {
        return (
            <button
                type="button"
                onTouchStart={onMouseDown}
                onTouchEnd={onMouseUp}
                className={
                    active || clicked
                        ? cls[color] + " " + cls[clsName]
                        : cls[color]
                }
            ></button>
        );
    }

    return (
        <button
            type="button"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className={
                active || clicked ? cls[color] + " " + cls[clsName] : cls[color]
            }
        >
            {keycap}
        </button>
    );
});

export default Keycap;
