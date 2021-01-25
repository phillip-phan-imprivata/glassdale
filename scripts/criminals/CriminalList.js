import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {Criminal} from "./Criminal.js"

export const criminalList = () => {
  getCriminals().then( () => {

    const criminals = useCriminals()
    const contentElement = document.querySelector(".criminalsContainer")
  
    let criminalHTMLRepresentation = ""
    for (const criminal of criminals) {
      criminalHTMLRepresentation += Criminal(criminal)
    }
  
    contentElement.innerHTML += `
      ${criminalHTMLRepresentation}
    `
  })
}