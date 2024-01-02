// IMPORTING VARIOUS FILES
    // IMPORTING TYPES
import {Review, NumberToStringFunction, User, Property} from "./types/types.js"
    // IMPORTING ENUMS
import { LoyaltyUser, Permissions } from "./types/enums.js"
    // IMPORTING DATABASES
import reviews from "./database/reviewsData.js"
import users from "./database/userData.js"
import properties from "./database/propertiesData.js"
    // IMPORTING TYPEGUARDS
import { checkIfReview, checkIfUser, checkIfProperty } from "./types/types.js"
    // IMPORTING CLASSES
import PropertyClass from "./classes/Property.js"

// DEFINING VARIABLES
    // DOM ELEMENTS
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLHeadingElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement
const propertyContainer = document.querySelector('.properties') as HTMLDivElement
const reviewContainer = document.querySelector('.reviews') as HTMLDivElement
const getReviewsButton = document.querySelector('button') as HTMLButtonElement
const mainImageContainer = document.querySelector('.main-image') as HTMLDivElement
const logoContainer = document.querySelector(".logo") as HTMLDivElement

    // USER ID
const userID: number = 1

// A FUNCTION TO DETECT WHETHER THE VALUE SHOULD BE SINGULAR OR PLURAL
const createPluralSyllable: NumberToStringFunction = (number) => (number > 1) || (number === 0) ? 's' : ''

// A FUNCTION TO GET THE RECENT REVIEW FOR A CERTAIN USER LEVEL
function getRecentReview(userLevel: LoyaltyUser, ...listOfReviews: (Review | object)[]): Review | void{
    try{
        // CHECKING THE RIGHT TYPE OF THE LIST
        for(const review of listOfReviews){
            if(!checkIfReview(review)){
                console.log(review)
                throw new TypeError(`Above object in the list of reviews is not correct`)
            }
        }

        // A VARIABLE FOR RECENT REVIEW AND LIST OF REVIEWS AS PER THE LEVEL OF USER
        let recentReview: Review | undefined;
        const userLevelReviews: Review[] = (listOfReviews as Review[]).filter(review => review.loyaltyUser === userLevel)

        // LOOPING TO GET THE RECENT REVIEW FROM THE GOLD REVIEWS
        for(const userLevelReview of userLevelReviews){
            const currentReviewTime: Date = new Date(userLevelReview.date.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3'))

            if(!recentReview || currentReviewTime > new Date(recentReview.date.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3'))){
                recentReview = userLevelReview
            }
        }

        // MAKING RIGHT CHOICE BASED ON RECENTREVIEW
        if(recentReview){
            return recentReview
        }else{
            throw new Error(`No review has the user level of: ${userLevel}`)
        }
    }catch(error: unknown){
        if(error){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }
    }
}

// A FUNCTION TO SHOW THE RECENT GOLD REVIEW
function showRecentGoldReview(): void{
    try{
        // GET THE RECENT GOLD REVIEW
        const recentGoldReview: Review | void = getRecentReview(LoyaltyUser.GOLD_USER, ...reviews)

        // CHECK IF THERE IS A RECENT GOLD REVIEW
        if(!recentGoldReview){
            reviewTotalDisplay.innerText = "No recent gold reviews found"
            throw new Error("No recent gold reviews found")
        }else{
            reviewTotalDisplay.innerText = `${recentGoldReview.stars} star${createPluralSyllable(recentGoldReview.stars)} | review by ${recentGoldReview.name}`
        }
    }catch(error: unknown){
        if(error){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }
    }
}

// A FUNCTION TO SHOW THE RECENT SILVER REVIEW
function showRecentSilverReview(): void{
    try{
        // GET THE RECENT SILVER REVIEW
        const recentSilverReview: Review | void = getRecentReview(LoyaltyUser.SILVER_USER, ...reviews)

        // CREATE A SILVERREVIEWCARD ELEMENT
        const silverReviewCard: HTMLDivElement = document.createElement("div")
        silverReviewCard.classList.add("review-card")
        reviewContainer.appendChild(silverReviewCard)

        // CHECK IF THERE IS A RECENT SILVER REVIEW
        if(!recentSilverReview){
            silverReviewCard.innerText = "No recent Silver reviews found"
            throw new Error("No recent Silver reviews found")
        }else{
            silverReviewCard.innerText = `${recentSilverReview.stars} star${createPluralSyllable(recentSilverReview.stars)} | review by ${recentSilverReview.name}`
        }
    }catch(error: unknown){
        if(error){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }
    }
}

// A FUNCTION TO SHOW THE RECENT BRONZE REVIEW
function showRecentBronzeReview(): void{
    try{
        // GET THE RECENT BRONZE REVIEW
        const recentBronzeReview: Review | void = getRecentReview(LoyaltyUser.BRONZE_USER, ...reviews)

        // CREATE A BRONZEREVIEWCARD ELEMENT
        const bronzeReviewCard: HTMLDivElement = document.createElement("div")
        bronzeReviewCard.classList.add("review-card")
        reviewContainer.appendChild(bronzeReviewCard)

        // CHECK IF THERE IS A RECENT BRONZE REVIEW
        if(!recentBronzeReview){
            bronzeReviewCard.innerText = "No recent bronze reviews found"
            throw new Error("No recent bronze reviews found")
        }else{
            bronzeReviewCard.innerText = `${recentBronzeReview.stars} star${createPluralSyllable(recentBronzeReview.stars)} | review by ${recentBronzeReview.name}`
        }
    }catch(error: unknown){
        if(error){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }
    }
}

// A FUNCTION TO GET THE CURRENT USER
function getCurrentUser(userID: number, ...listOfUsers: (User | object)[]): User | void{
    try{
        // CHECKING IF DATA IS OKAY
        for(const user of listOfUsers){
            if(!checkIfUser(user)){
                console.log(user)
                throw new TypeError(`Above object in the list of users is not correct`)
            }
        }

        // IF LIST IS FINE, GET THE USER MATCHING THE ID ANR RETURN THE VALUE
        const currentUser: User | undefined = (listOfUsers as User[]).find(user => user.id === userID)

        if(currentUser){
            return currentUser
        }else{
            throw new Error(`No user has the id of ${userID}`)
        }
    }catch(error: unknown){
        if(error){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }
    }
}

// A FUNCTION TO POPULATE THE USER
function populateUser(): void{
    try{
        // GET THE CURRENT USER 1ST
        const currentUser: User | void = getCurrentUser(userID, ...users)

        // CHECK IF CURRENTUSER EXISTS, IF NOT THROW ERROR
        if(!currentUser){
            userNameDisplay.innerText = "Current user cannot be found"
            throw new Error("Current user cannot be found")
        }

        const {isReturning, userName} = currentUser

        // USE THE CURRENT USER TO POPULATE THE FIELDS
        if (isReturning === true){
            returningUserDisplay.innerHTML = 'back'
        }

        // MAKE RIGTH DECISION BASED ON USERNAME FIELD
        userName.lastName
            ?
        userNameDisplay.innerHTML = `${userName.firstName} ${userName.lastName}`
            :
        userNameDisplay.innerHTML = `${userName.firstName}`
    }catch(error: unknown){
        if(error){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }
    }
}

// A FUNCTION TO ADD PROPERTIES TO DOM
function generatePropertiesArray(...listOfProperties: (Property | object)[]): void{
    // CHECK IF PROPERTIES ARRAY REALLY HAS RIGHT VALUES
    for(const property of listOfProperties){
        if(!checkIfProperty(property)){
            console.log(property)
            throw new TypeError(`Above object in the list of properties is not correct`)
        }
    }

    // LOOPTING THROUGH THE SAFE PROPERTIES ARRAY
    (listOfProperties as Property[]).map(property => {
        propertyContainer.innerHTML += `
            <div class="card">
                ${property.title}
                
                <img
                    width="100"
                    height="100"
                    alt="property image"
                    title="property image"
                    loading="lazy"
                    src= ${property.src}
                />

                <div hidden class="price-tag">${property.price}/night</div>
            </div>
        `
    })
}

// A FUNCTION TO SHOW MORE DETAILS ON THE PROPERTIES
function showPropertiesDetails(): void{
    try{
        // CHECK IF CURRENT USER HAS THE RIGHTS TO VIEW
        const currentUser: User | void = getCurrentUser(userID, ...users)

        if(!currentUser){
            userNameDisplay.innerText = "Current user cannot be found"
            throw new Error("Current user cannot be found")
        }else if(!(currentUser.permissions) || (currentUser.permissions !== Permissions.ADMIN)){
            throw new Error("You do not have access to viewing deeper property details")
        }else{
            // LOOP THROUGH THE PROPERTIES ELEMENTS AND EXPOSE THOSE WHICH HAVE THE DETAILS
            const propertyElements: HTMLCollection = propertyContainer.children
            
            for(const propertyElement of propertyElements){
                const priceTagElement = propertyElement.querySelector(".price-tag") as Element
                priceTagElement.removeAttribute("hidden")
            }
        }
    }catch(error: unknown){
        if(error){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }
    }
}

// A FUNCTION TO SHOW THE MAIN PROPERTY
function showMainProperty(): void{
    try{
        // CREATING A MAIN PROPERTY USING THE CLASS
        const mainPropertyReview: Review = {
            name: 'Olive',
            stars: 5,
            loyaltyUser: LoyaltyUser.GOLD_USER,
            date: '12-04-2021'
        }

        const mainProperty: Property | void = PropertyClass.createProperty('Italian House', 100, "johnDoe@gmail.com", +1234567890, true, "Nairobi", "Kenya", undefined, undefined, "/img/properties/italian-property.jpg", mainPropertyReview)

        // CHECKING IF A PROPERTY WAS REALLY CREATED
        if(!mainProperty){
            throw new Error("Sorry, there was an error in creating a property instance")
        }

        // ADDING NEW DATA TO THE DOM
        mainImageContainer.innerHTML +=  `
            <figure>
                <img
                    width="100"
                    height="100"
                    alt="property image"
                    title="property image"
                    loading="lazy"
                    src=${mainProperty.src}
                />

                <figcaption>${mainProperty.title}</figcaption>
                <div hidden class="price-tag">${mainProperty.price}/night</div>
            </figure>
        `
    }catch(error: unknown){
        if(error){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }
    }
}

// RUNNING CREATED FUNCTIONS
showRecentGoldReview()
populateUser()
generatePropertiesArray(...properties)
showMainProperty()
showPropertiesDetails()

getReviewsButton.addEventListener("click", () => {
    showRecentSilverReview()
    showRecentBronzeReview()
})