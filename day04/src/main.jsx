
import { createRoot } from 'react-dom/client'
import { MainLayout } from './layout/MainLayout'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/index.css"
import { Provider } from 'react-redux'
import { myStore } from './store'
createRoot( document.getElementById( 'root' ) ).render(

  <Provider store={myStore}>
    <MainLayout />
  </Provider>
)
