let criminalCollection = []

export const useCriminals = () => {
    return criminalCollection.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                criminalCollection = parsedCriminals
            }
        )
}