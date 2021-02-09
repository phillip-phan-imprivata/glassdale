import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {Criminal} from "./Criminal.js"
import {getCriminalFacilities, useCriminalFacilities} from "../facilities/CriminalFacilityProvider.js"
import {getFacilities, useFacilities} from "../facilities/FacilityProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")
const facilityElement = document.querySelector(".facilityContainer")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(criminal => {
          return criminal.conviction === event.detail.crimeThatWasChosen
        })
        render(matchingCriminals)
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const matchingCriminals = criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
    )
    render(matchingCriminals)
})

eventHub.addEventListener("associatesClicked", e => {
    const criminalsArr = useCriminals()
    const chosenCriminal = criminalsArr.find(criminal => {
        return criminal.id === parseInt(e.detail.criminalId)
    })

    const associates = chosenCriminal.known_associates.map(associate => {
        return `
        Name: ${associate.name}
        Alibi: ${associate.alibi}
        `
    }).join("")
    
    alert(associates)
})

eventHub.addEventListener("criminalButtonClick", e => {
    facilityElement.innerHTML = ""
    CriminalList()
})

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}

export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

eventHub.addEventListener("facilitiesButtonClicked", e => {
    contentTarget.innerHTML = ""
})
