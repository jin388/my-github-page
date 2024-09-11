export interface OctavaInfo {
    name: string;
    url: string;
    keycap: string;
}

export interface Octava extends OctavaInfo {
    diez?: OctavaInfo;
}
