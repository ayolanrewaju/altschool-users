import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../features/users/usersSlice'

function Users() {
  const { results: users } = useSelector((store) => store.users.randomUsers)
  const { isLoading } = useSelector((store) => store.users)
  const dispatch = useDispatch()

  //console.log(users)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const total = users?.length
  const pages = Math.ceil(total / postsPerPage);
  const skip = currentPage * postsPerPage - postsPerPage;

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  if(isLoading) {
    return (
      <div className='loading loading-center'></div>
    )
  }

  return (
    <section className='users'>
      <div className='container users__container'>
        <h1 className="users__title">Our users</h1>
        {users.slice(skip, skip + postsPerPage).map((item, index) => {
          const name = `${item.name.title} ${item.name.first} ${item.name.last}`;
          return (
            <div key={index} className="user">
              <img src={item.picture.large} alt="" />
              <div>
                <p>{name}</p>
                <p>{item.gender}</p>
                <p>{item.email}</p>
              </div>
            </div>
          );
        })}

        <div className='users__buttons'>
          {
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              aria-label="navigates to the previous page"
            >
              previous
            </button>
          }

          <p>
            Pages: {currentPage} of {pages}
          </p>

          {
            <button
              disabled={currentPage >= pages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              aria-label="navigates to the next page"
            >
              next
            </button>
          }
        </div>
      </div>
    </section>
  )
}

export default Users