export const Witness = (witness) => {
  return `
    <div class="witness__card">
      <div><h3>${witness.name}</h3></div>
      <div>${witness.statements}</div>
    </div>
  `
}