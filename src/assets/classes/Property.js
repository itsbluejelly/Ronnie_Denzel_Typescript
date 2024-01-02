// IMPORTING NECESSARY FILES
// IMPORTING TYPES
import { checkIfReview } from "../types/types.js";
// A FUNCTION TO CREATE A PROPERTY OF A REGARDED TYPE
function createProperty(title, price, email, phoneNumber, isAvailable, city, country, firstLine, code, src, ...listOfReviews) {
    try {
        // ADDING THE SAFE-TYPE PROPERTIES
        const newProperty = { title, price, isAvailable };
        newProperty.contact = { email, phoneNumber };
        newProperty.location = { city, country, firstLine, code };
        newProperty.src = src;
        // CHECKING IF THERE ARE REVIEWS AND CHECKING THEIR SAFETY
        if (listOfReviews.length) {
            for (const review of listOfReviews) {
                if (!checkIfReview(review)) {
                    console.log(review);
                    throw new TypeError("The object above does is not a proper review");
                }
            }
            // IF EVERY REVIEW IS CONSIDERED A REVIEW TYPE, ADD THE LIST TO THE NEWPROPERTY
            newProperty.reviews = listOfReviews;
        }
        // RETURNNG THE NEW PROPERTY
        return newProperty;
    }
    catch (error) {
        if (error) {
            console.error(`${error.name}: ${error.message}`);
        }
    }
}
// EXPORTING AN OBJECT-LIKE CLASS CONTAINING THESE FUNCTIONS
const PropertyClass = { createProperty };
export default PropertyClass;
