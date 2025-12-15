import type { PortableTextBlock } from '@portabletext/types';

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
    description?: PortableTextBlock[]; // Portable Text
    formLink?: string;
    buttonText?: string;
}

export interface PriceRow {
    type: string;
    allDay: string;
    workingHours: string;
    eveningWeekend: string;
}

export interface StudentPricing {
    singleEntry: number;
    monthlyPass: number;
}

export interface PriceTableDocument {
    title?: string;
    rows?: PriceRow[];
    studentPricing?: StudentPricing;
}

export interface PaymentMethodsDocument {
    methods?: string[];
}

export interface TrainerDocument {
    name: string;
    photo?: {
        asset: {
            url: string;
        };
    };
    instagram?: string;
    phone?: string;
    education?: string[];
    specialization?: string[];
    achievements?: string[];
    interests?: string[];
}