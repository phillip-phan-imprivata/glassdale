const eventHub = document.querySelector(".container")

export const Criminal = (criminal) => {
  return `
    <div class="criminal__card">
    <div class="criminal__name"><h3>${criminal.name}</h3></div>
    <div class="criminal__age">Age: ${criminal.age}</div>
    <div class="criminal__crime">Crime: ${criminal.conviction}</div>
    <div class="criminal__termStart">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
    <div class="criminal__termEnd">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
    <button id="associates--${criminal.id}">Associate Alibis</button>
    </div>
  `
}

eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("associates--")) {
    const[prefix, criminal] = e.target.id.split("--")

    const customEvent = new CustomEvent("associatesClicked", {
      detail: {
        criminalId: `${criminal}`
      }
    })

    eventHub.dispatchEvent(customEvent)
  }
})