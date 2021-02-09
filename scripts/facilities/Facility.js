export const Facility = (facilityObject, criminals) => {
  return `
    <div class="facility">
      <h4>${facilityObject.facilityName}</h4>
      <p>${facilityObject.securityLevel}</p>
      <p>${facilityObject.capacity}</p>
      <h5>Criminals</h5>
      <ul>
        ${criminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
      </ul>
    </div>
  `
}