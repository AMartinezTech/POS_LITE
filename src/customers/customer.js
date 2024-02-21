import '../css/style.css'
import { setupMenu } from '../components/menu'
import { customer } from '../mocks/cliente.json'
import { Modal } from '../components/modal'
const body = document.body
setupMenu(body)
function createAppCustomer() {
  document.title = 'Maestro de Cliente'

  const header = document.createElement('header')
  header.classList.add('header')

  const btnNewDoc = document.createElement('button')
  btnNewDoc.classList.add('btn-new')
  btnNewDoc.setAttribute('id', 'btnNewCustomer')
  btnNewDoc.innerHTML = `<ion-icon name="add-circle-outline"></ion-icon>`
  const divHeader = document.createElement('div')
  divHeader.classList.add('title-document')
  divHeader.innerText = 'Maestro de Cliente'
  header.append(btnNewDoc, divHeader)

  const table = document.createElement('table')
  table.classList.add('table')
  const thead = document.createElement('thead')
  const tr = document.createElement('tr')
  tr.innerHTML = `<th scope="col">#</th>
    <th scope="col">Nombre</th>
    <th scope="col">Apellidos</th>
    <th scope="col">acción</th>`
  thead.append(tr)
  const tbody = document.createElement('tbody')

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

  const htmlResult = result.toString().replaceAll(',', '')

  tbody.innerHTML = htmlResult
  table.append(thead, tbody)

  const app = document.querySelector('#app')
  const modal = document.createElement('div')
  modal.innerHTML = Modal
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
