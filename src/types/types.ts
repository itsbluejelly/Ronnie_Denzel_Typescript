// IMPORTING ENUMS
import { LoyaltyUser, Permissions } from "./enums.js"

// DECLARING FUNCTION TYPES
    // NUMBER -> STRING
export type NumberToStringFunction = (a: number) => string

// DECLARING TYPES
    // A TYPE OF A BASIC REVIEW
export type Review = {
    name: string,
    stars: number,
    loyaltyUser: LoyaltyUser,
    date: string,
}

    // A TYPE OF A USER
export type User = {
    id: number,

    userName: {
        firstName: string,
        lastName?: string
    },

    isReturning: boolean,
    age?: number,
    permissions?: Permissions,
    stayedAt?: string[]
}

    // A TYPE OF A PROPERTY
export type Property = {
    id: number,
    title: string,
    price: number,
        
    contact: {
        email: string,
        phoneNumber: number
    },

    isAvailable: true,

    location: {
        city: string,
        country: string,
        firstLine?: string,
        code?: number
    }
}

// DECLARING TYPEGUARDS
    // CHECK IF REVIEW
export function checkIfReview(obj: any): obj is Review {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'name' in obj && typeof obj.name === "string" &&
        'stars' in obj && typeof obj.stars === "number" &&
        'loyaltyUser' in obj && typeof obj.loyaltyUser === "string" &&
        'date' in obj && typeof obj.date === "string" 
    )
}

    // CHECK IF USER
export function checkIfUser(obj: any): obj is User{
    return (
        typeof obj === "object" &&
        obj !== null &&
        "userName" in obj && typeof obj.userName === "object" &&
        "id" in obj && typeof obj.id === "number" &&
        "isReturning" in obj && typeof obj.isReturning === "boolean"
    )
}

    // CHECK IF PROPERTY
export function checkIfProperty(obj: any): obj is Property{
    return (
        typeof obj === "object" &&
        obj !== null &&
        "title" in obj && typeof obj.title === "string" &&
        "price" in obj && typeof obj.price === "number"
    )
}