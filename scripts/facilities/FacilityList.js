import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"
import { Facility } from "./Facility.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".facilityContainer")

eventHub.addEventListener("facilitiesButtonClicked", e => {
  FacilityList()
})

const render = (facilitiesToRender, allCriminals, allRelationships) => {
  contentTarget.innerHTML = facilitiesToRender.map(facilityObj => {
    const criminalRelationshipsForThisFacility = allRelationships.filter(cf => cf.facilityId === facilityObj.id)

    const criminals = criminalRelationshipsForThisFacility.map(cf => {
      const matchingCriminalObj = allCriminals.find(criminal => criminal.id === cf.criminalId)
      return matchingCriminalObj
    })

    return Facility(facilityObj, criminals)
  }).join("")
}

export const FacilityList = () => {

  getFacilities()
    .then(getCriminals)
    .then(getCriminalFacilities)
    .then(() => {
      const facilities = useFacilities()
      const criminals = useCriminals()
      const crimFac = useCriminalFacilities()

      render(facilities, criminals, crimFac)
    })
}