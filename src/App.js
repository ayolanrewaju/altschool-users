import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Users, Error, SharedLayout } from './pages'

function App() {
  //throw new Error()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='users' element={<Users />}/>
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;