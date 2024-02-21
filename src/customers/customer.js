import '../css/style.css'
import { setupMenu } from '../components/menu'
import { customer } from '../mocks/cliente.json'
import { modalCustomer } from '../components/modalCustomer'
const body = document.body
setupMenu(body)
function createAppCustomer() {
  /* Update title of document*/
  document.title = 'Maestro de Cliente'

  /* Create Header element */
  const header = document.createElement('header')
  header.classList.add('header')

  /* Create button element */
  const btnNewDoc = document.createElement('button')
  btnNewDoc.classList.add('btn-new')
  btnNewDoc.setAttribute('id', 'btnNewCustomer')
  btnNewDoc.innerHTML = `<ion-icon name="add-circle-outline"></ion-icon>`

  /* Creating div element */
  const divHeader = document.createElement('div')
  divHeader.classList.add('title-document')
  divHeader.innerText = 'Maestro de Cliente'

  /* Appending the button and div, to Header element*/
  header.append(btnNewDoc, divHeader)

  /* Creating table element */
  const table = document.createElement('table')
  table.classList.add('table')

  /* Creating table head element */
  const thead = document.createElement('thead')

  /* Creating table tr element */
  const tr = document.createElement('tr')
  tr.innerHTML = `<th scope="col">#</th>
    <th scope="col">Nombre</th>
    <th scope="col">Apellidos</th>
    <th scope="col">acción</th>`

  /* Appending table tr to table head element */
  thead.append(tr)

  /* Creating table body element */
  const tbody = document.createElement('tbody')

  /* Mapping data from customer JSON for append to table body */
  const result = customer.map((item) => {
    return `<tr class="tr-data">
    <th scope="col">${item.id}</th>
    <th scope="col">${item.name}</th>
    <th scope="col">${item.lastName}</th>
    <th scope="col"> 
    <span>
      <ion-icon id="btnEdit" name="create-outline"></ion-icon>
      <ion-icon id="btnDelete" name="trash-outline"></ion-icon>
    </span>
    </th>
    </tr>`
  })

  /* Formating result of mapping for table body*/
  const htmlResult = result.toString().replaceAll(',', '')
  tbody.innerHTML = htmlResult

  /* Append table head and table body to table */
  table.append(thead, tbody)

  /* Selecting app seletor of the DOM */
  const app = document.querySelector('#app')

  /* Creating modal element */
  const modal = document.createElement('div')
  modal.innerHTML = modalCustomer

  /* Appening header, table and modal to app element */
  app.append(header, table, modal)
}
createAppCustomer()
const modal = document.getElementById('myModal')
const btnModalClose = document.getElementsByClassName('close')[0]
const btnNewCustomer = document.getElementById('btnNewCustomer')

btnNewCustomer.addEventListener('click', () => {
  modal.style.display = 'block'
})
btnModalClose.addEventListener('click', () => {
  modal.style.display = 'none'
})
const btnEdit = document.getElementById('btnEdit')
btnEdit.addEventListener('click', () => {
  alert('Edit')
})
const btnDelete = document.getElementById('btnDelete')
btnDelete.addEventListener('click', () => {
  alert('Delete')
})
