
import { createRoot } from 'react-dom/client'
import { MainLayout } from './layout/MainLayout'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/index.css"
createRoot( document.getElementById( 'root' ) ).render(
  <MainLayout />,
)
