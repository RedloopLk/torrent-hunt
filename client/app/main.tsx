import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { BrowserRouter, Routes } from 'react-router'
import { flattenRoutes } from '@/lib/routes-helper'
import { routesConfig } from '@/routes'
import Layout from './layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>{flattenRoutes(routesConfig)}</Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>
)
