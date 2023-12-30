// DECLARING TYPEGUARDS
// CHECK IF REVIEW
export function checkIfReview(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        'name' in obj && typeof obj.name === "string" &&
        'stars' in obj && typeof obj.stars === "number" &&
        'loyaltyUser' in obj && typeof obj.loyaltyUser === "string" &&
        'date' in obj && typeof obj.date === "string");
}
// CHECK IF USER
export function checkIfUser(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "userName" in obj && typeof obj.userName === "object" &&
        "id" in obj && typeof obj.id === "number" &&
        "isReturning" in obj && typeof obj.isReturning === "boolean");
}
// CHECK IF PROPERTY
export function checkIfProperty(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "title" in obj && typeof obj.title === "string" &&
        "price" in obj && typeof obj.price === "number");
}
