export function setupFooter(element) {
  const footer = () => {
    const row1 = document.createElement('div')
    row1.classList.add('row1')
    row1.innerHTML = '<h6>AMartínezTech, E.I.R.L.</h6>'

    const row2 = document.createElement('div')
    row2.classList.add('row2')
    row2.innerHTML =
      '<small>Av. General Oliva No.32, Nueva Nagua, M.T.S. Rep. Dom.</small>'

    element.append(row1, row2)
  }

  footer()
}
