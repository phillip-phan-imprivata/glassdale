const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

export const facilityButton = () => {
  contentTarget.innerHTML = "<button id='showFacilities'>List Facilities</button>"
}

eventHub.addEventListener("click", e => {
  if(e.target.id === "showFacilities"){
    if(e.target.innerHTML === "List Facilities"){      
      e.target.innerHTML = "List Criminals"
      const customEvent = new CustomEvent("facilitiesButtonClicked")
      eventHub.dispatchEvent(customEvent)
    } else {
      e.target.innerHTML = "List Facilities"
      const customEvent = new CustomEvent("criminalButtonClick")
      eventHub.dispatchEvent(customEvent)
    }
  }
})