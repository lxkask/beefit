export interface GroupSession {
    day: string;
    time: string;
    title: string;
    description?: string;
}

export interface GroupSessionsDocument {
    sessions?: GroupSession[];
}