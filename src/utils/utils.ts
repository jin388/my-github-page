import { type Octava } from "../types/types";

export const soundKeys: Octava[] = [
    // Octave 3
    {
        name: "C3",
        url: new URL("../../public/sounds/C3.mp3", import.meta.url).href,
        keycap: "a",
    },
    {
        name: "D3",
        url: new URL("../../public/sounds/D3.mp3", import.meta.url).href,
        keycap: "q",
        diez: {
            name: "C#3",
            url: new URL("../../public/sounds/C3-diez.mp3", import.meta.url)
                .href,
            keycap: "1",
        },
    },
    {
        name: "E3",
        url: new URL("../../public/sounds/E3.mp3", import.meta.url).href,
        keycap: "w",
        diez: {
            name: "D#3",
            url: new URL("../../public/sounds/D3-diez.mp3", import.meta.url)
                .href,
            keycap: "2",
        },
    },
    {
        name: "F3",
        url: new URL("../../public/sounds/F3.mp3", import.meta.url).href,
        keycap: "e",
    },
    {
        name: "G3",
        url: new URL("../../public/sounds/G3.mp3", import.meta.url).href,
        keycap: "r",
        diez: {
            name: "F#3",
            url: new URL("../../public/sounds/F3-diez.mp3", import.meta.url)
                .href,
            keycap: "4",
        },
    },
    {
        name: "A3",
        url: new URL("../../public/sounds/A3.mp3", import.meta.url).href,
        keycap: "t",
        diez: {
            name: "G#3",
            url: new URL("../../public/sounds/G3-diez.mp3", import.meta.url)
                .href,
            keycap: "5",
        },
    },
    {
        name: "B3",
        url: new URL("../../public/sounds/B3.mp3", import.meta.url).href,
        keycap: "y",
        diez: {
            name: "A#3",
            url: new URL("../../public/sounds/A3-diez.mp3", import.meta.url)
                .href,
            keycap: "6",
        },
    },

    // Octave 4
    {
        name: "C4",
        url: new URL("../../public/sounds/01-C4.mp3", import.meta.url).href,
        keycap: "u",
    },
    {
        name: "D4",
        url: new URL("../../public/sounds/03-D4.mp3", import.meta.url).href,
        keycap: "i",
        diez: {
            name: "C#4",
            url: new URL("../../public/sounds/02-C4-diez.mp3", import.meta.url)
                .href,
            keycap: "8",
        },
    },
    {
        name: "E4",
        url: new URL("../../public/sounds/05-E4.mp3", import.meta.url).href,
        keycap: "o",
        diez: {
            name: "D#4",
            url: new URL("../../public/sounds/04-D4-diez.mp3", import.meta.url)
                .href,
            keycap: "9",
        },
    },
    {
        name: "F4",
        url: new URL("../../public/sounds/06-F4.mp3", import.meta.url).href,
        keycap: "p",
    },
    {
        name: "G4",
        url: new URL("../../public/sounds/08-G4.mp3", import.meta.url).href,
        keycap: "[",
        diez: {
            name: "F#4",
            url: new URL("../../public/sounds/07-F4-diez.mp3", import.meta.url)
                .href,
            keycap: "0",
        },
    },
    {
        name: "A4",
        url: new URL("../../public/sounds/10-A4.mp3", import.meta.url).href,
        keycap: "]",
        diez: {
            name: "G#4",
            url: new URL("../../public/sounds/09-G4-diez.mp3", import.meta.url)
                .href,
            keycap: "-",
        },
    },
    {
        name: "B4",
        url: new URL("../../public/sounds/12-B4.mp3", import.meta.url).href,
        keycap: "\\",
        diez: {
            name: "A#4",
            url: new URL("../../public/sounds/11-A4-diez.mp3", import.meta.url)
                .href,
            keycap: "=",
        },
    },

    // Octave 5
    {
        name: "C5",
        url: new URL("../../public/sounds/13-C5.mp3", import.meta.url).href,
        keycap: "v",
    },
    {
        name: "D5",
        url: new URL("../../public/sounds/15-D5.mp3", import.meta.url).href,
        keycap: "b",
        diez: {
            name: "C#5",
            url: new URL("../../public/sounds/14-C5-diez.mp3", import.meta.url)
                .href,
            keycap: "g",
        },
    },
    {
        name: "E5",
        url: new URL("../../public/sounds/17-E5.mp3", import.meta.url).href,
        keycap: "n",
        diez: {
            name: "D#5",
            url: new URL("../../public/sounds/16-D5-diez.mp3", import.meta.url)
                .href,
            keycap: "h",
        },
    },
    {
        name: "F5",
        url: new URL("../../public/sounds/18-F5.mp3", import.meta.url).href,
        keycap: "m",
    },
    {
        name: "G5",
        url: new URL("../../public/sounds/20-G5.mp3", import.meta.url).href,
        keycap: ",",
        diez: {
            name: "F#5",
            url: new URL("../../public/sounds/19-F5-diez.mp3", import.meta.url)
                .href,
            keycap: "k",
        },
    },
    {
        name: "A5",
        url: new URL("../../public/sounds/22-A5.mp3", import.meta.url).href,
        keycap: ".",
        diez: {
            name: "G#5",
            url: new URL("../../public/sounds/21-G5-diez.mp3", import.meta.url)
                .href,
            keycap: "l",
        },
    },
    {
        name: "B5",
        url: new URL("../../public/sounds/24-B5.mp3", import.meta.url).href,
        keycap: "/",
        diez: {
            name: "A#5",
            url: new URL("../../public/sounds/23-A5-diez.mp3", import.meta.url)
                .href,
            keycap: ";",
        },
    },
];
