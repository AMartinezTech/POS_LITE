import './src/css/style.css'

import App from './src/App.js'
import { setupMenu } from './src/components/menu.js'

setupMenu(document.body)
App(document.querySelector('#app'))
