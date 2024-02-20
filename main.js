import './src/css/style.css'

import App from './src/App.js'
import { setupMenu } from './src/components/main_manu/menu.js'

setupMenu(document.body)
App(document.querySelector('#app'))
