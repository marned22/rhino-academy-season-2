import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './core/pages/Root'

import './ux/styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
