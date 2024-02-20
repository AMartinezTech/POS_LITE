export function setupMenu(element) {
  const menuItems = ['cliente', 'inventario', 'ventas', 'caja']

  const createMenu = () => {
    const menuContect = `
    <div class="menu-icon">
    <ion-icon name="menu-outline"></ion-icon>
    <ion-icon name="close-outline"></ion-icon>
  </div>
  <aside id="leftMenu" class="left-menu">
    <section>
      <div id="headerMenu" class="header-menu">
        <ion-icon id="headerMenu_icon" name="cloud-outline"></ion-icon>
        <span id="companyName">AMartínezTech</span>
      </div>
      <button class="btnMenu">
        <ion-icon name="add-outline"></ion-icon>
        <span>Create new</span>
      </button>
    </section>

    <nav class="navMenu">
      <ul>
        <li>
          <a href="#">
            <ion-icon name="cube-outline"></ion-icon>
            <span>Compras</span>
          </a>
        </li>
        <li>
          <a href="/pages/customer.html">
            <ion-icon name="person-add-outline"></ion-icon>
            <span>Clientes</span>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="cart-outline"></ion-icon>
            <span>Ventas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <ion-icon name="card-outline"></ion-icon>
            <span>Caja</span>
          </a>
        </li>
      </ul>
    </nav>
    <section>
      <div class="linea"></div>
      <div class="dark-mode">
        <div class="info">
          <ion-icon name="moon-outline"></ion-icon>
          <span>Modo oscuro</span>
        </div>
        <div class="switch">
          <div class="base">
            <div class="circule"></div>
          </div>
        </div>
      </div>
    </section>
  </aside>
  <main id="app" class="app"></main>

    `
    element.innerHTML = menuContect
  }

  createMenu()

  /*-------------------------Left Menu*/
  const headerMenu_icon = document.getElementById('headerMenu_icon')
  const leftMenu = document.getElementById('leftMenu')
  const spans = document.querySelectorAll('span')
  const switchMenu = document.querySelector('.switch')
  const circuleMenu = document.querySelector('.circule')
  const menuIcon = document.querySelector('.menu-icon')
  const main = document.querySelector('main')

  menuIcon.addEventListener('click', () => {
    leftMenu.classList.toggle('max-left-menu')
    if (leftMenu.classList.contains('max-left-menu')) {
      menuIcon.children[0].style.display = 'none'
      menuIcon.children[1].style.display = 'block'
    } else {
      menuIcon.children[0].style.display = 'block'
      menuIcon.children[1].style.display = 'none'
    }
    if (window.innerWidth <= 320) {
      leftMenu.classList.add('left-mini-menu')
      main.classList.add('min-main')
      spans.forEach((span) => {
        span.classList.add('hidden')
      })
    }
  })

  switchMenu.addEventListener('click', () => {
    let body = document.body
    body.classList.toggle('dark-mode')
    circuleMenu.classList.toggle('on')
  })

  headerMenu_icon.addEventListener('click', () => {
    leftMenu.classList.toggle('left-mini-menu')
    main.classList.toggle('min-main')

    spans.forEach((item) => {
      item.classList.toggle('hidden')
    })
  })
  /*-------------------------Left Menu END*/
}
