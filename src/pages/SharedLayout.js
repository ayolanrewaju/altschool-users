import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components'

function SharedLayout() {
  return (
    <div>
      <Navbar />

      <main className='main'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default SharedLayout