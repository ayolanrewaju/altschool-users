import { Link } from 'react-router-dom'
import NotFound from '../assets/images/not-found.svg'

function Error() {
  return (
    <div className='error'>
      <img src={NotFound} alt="" />
      <Link to='/'>You are lost, click Here to go back home</Link>
    </div>
  )
}

export default Error