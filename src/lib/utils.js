import { clsx } from "clsx";
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

export function cn(...args) {
    return twMerge(clsx(...args));
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max)
}

export function formatDate(date) {
    return moment(date).format('MMMM YYYY');
}
