import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CodeRunner from './CodeRunner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CodeRunner />
  </StrictMode>,
)
