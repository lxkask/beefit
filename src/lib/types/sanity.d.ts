export interface GroupSession {
    day: string;
    time: string;
    title: string;
    description?: string;
}

export interface GroupSessionsDocument {
    sessions?: GroupSession[];
}

export interface HiringDocument {
    active: boolean;
    title?: string;
    description?: any; // Portable Text
    formLink?: string;
    buttonText?: string;
}