import '../css/style.css'
import { setupMenu } from '../components/main_manu/menu'
import { customer } from '../mocks/cliente.json'

const body = document.body
setupMenu(body)
function createAppCustomer() {
  document.title = 'Maestro de Cliente'
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
    <ion-icon name="create-outline"></ion-icon>
    </span>
    <span>
    <ion-icon name="trash-outline"></ion-icon>
    </span>
    </th>
    </tr>`
  })

  const htmlResult = result.toString().replaceAll(',', '')

  tbody.innerHTML = htmlResult
  table.append(thead, tbody)

  const app = document.querySelector('#app')
  app.append(table)
}
createAppCustomer()
