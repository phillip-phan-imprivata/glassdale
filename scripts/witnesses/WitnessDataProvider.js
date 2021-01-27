let witnessCollection = []

export const useWitnesses = () => {
  return witnessCollection.slice()
}

export const getWitnesses = () => {
  return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
      parsedWitnesses => {
        witnessCollection = parsedWitnesses
      }
    )
}