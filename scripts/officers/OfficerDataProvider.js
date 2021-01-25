let officerCollection = []

export const useOfficers = () => {
  return officerCollection.slice()
}

export const getOfficers = () => {
  return fetch("https://criminals.glassdale.us/officers")
    .then(response => response.json())
    .then(parsedOfficers => {
      officerCollection = parsedOfficers
    })
}
