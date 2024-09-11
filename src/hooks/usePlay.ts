import { useCallback } from "react";

export function usePlay(src?: string) {
    const onPlaySound = useCallback(() => {
        const audio = new Audio(src);
        audio.play();
    }, [src]);

    return onPlaySound;
}
