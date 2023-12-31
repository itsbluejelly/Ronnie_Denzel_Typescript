// IMPORTING NECESSARY FILES
    // IMPORTING TYPES
import { Property, Review, checkIfReview} from "../types/types.js";


// A FUNCTION TO CREATE A PROPERTY OF A REGARDED TYPE
function createProperty(title: string, price: number, email: string, phoneNumber: number, isAvailable: boolean, city: string, country: string, firstLine?: string, code?: number, ...listOfReviews: (Review | object)[]): Property | void{
    try{
        // ADDING THE SAFE-TYPE PROPERTIES
        const newProperty = {title, price,isAvailable} as Property
        newProperty.contact = {email, phoneNumber}
        newProperty.location = {city, country, firstLine, code}

        // CHECKING IF THERE ARE REVIEWS AND CHECKING THEIR SAFETY
        if(listOfReviews.length){
            for(const review of listOfReviews){
                if(!checkIfReview(review)){
                    console.log(review)
                    throw new TypeError("The object above does is not a proper review")
                }
            }

            // IF EVERY REVIEW IS CONSIDERED A REVIEW TYPE, ADD THE LIST TO THE NEWPROPERTY
            newProperty.reviews = listOfReviews as Review[]
        }

        // RETURNNG THE NEW PROPERTY
        return newProperty
    }catch(error: unknown){
        if(error){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }
    }
}

// EXPORTING AN OBJECT-LIKE CLASS CONTAINING THESE FUNCTIONS
const PropertyClass = {createProperty}
export default PropertyClass