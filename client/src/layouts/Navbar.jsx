import React from 'react'
import { Link,useNavigate} from 'react-router-dom'


const Navbar = () => {

  const picture = localStorage.getItem('picture')
  const username = localStorage.getItem('username')

  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" to="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/blog">Create Blog</Link>
      </li>
            
      <div className='profile'>
      <a className="nav-link dropdown-toggle" id="userDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img
            // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
            src={picture}
            className="rounded-circle"
            height='30px'
            width='30px'
            alt="Portrait of a Woman"
            loading="lazy"
          />
          {username}</a>
    <div className="dropdown-menu">
      <Link className="dropdown-item" to='/home'>Logout</Link> 
    </div>
</div>

    </ul>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar