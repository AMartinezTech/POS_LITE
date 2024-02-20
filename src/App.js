export default function App(element) {
  function createApp() {
    const title = document.createElement('h1')
    title.innerText = 'App title'
    element.append(title)
  }

  createApp()
}
