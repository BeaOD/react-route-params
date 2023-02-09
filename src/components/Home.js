import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <nav>
           <Link to='/'><h3>Home</h3></Link> 
           <Link to='/About'><h3>About</h3></Link>
           <Link to='/Contact'><h3>Contact</h3></Link>
           <Link to='/Services'><h3>Services</h3></Link> 
            
        </nav>

        <p> In order for Hooks to work, 
          the react import from your application code needs to resolve to
         the same module as the react import from inside the react-dom package.</p>
        
        <p>If these react imports resolve to two different exports objects, you will see this warning. 
          This may happen if you accidentally end up with two copies of the react
           package. </p>
    </div>
  )
}

export default Home