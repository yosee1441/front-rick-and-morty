import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';

import { darkTheme } from './styles/theme.style'
import store from './redux/store'

const HomePage = lazy(() => import('@/pages/home/home.page'))

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Suspense fallback={<CircularProgress />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </Provider>
  )
}

export default App
