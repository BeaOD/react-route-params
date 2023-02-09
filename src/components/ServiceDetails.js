import React from 'react'
import { useParams } from 'react-router-dom'
 

function ServiceDetails  () {
    const { id } = useParams();
  
    
  return (
    <div>
       
       {/* <nav>
           <Link to='/'><h3>Home</h3></Link> 
           <Link to='/About'><h3>About</h3></Link>
           <Link to='/Contact'><h3>Contact</h3></Link>
           <Link to='/Services'><h3>Services</h3></Link>
           <Link to='/ServiceDetails'><h3>Services Details</h3></Link>  
        </nav>*/}

        <p> Service Details{id}</p>
        <h3>Error: useHref  may be used only in the context of a Router
            component Ask Question Asked 1 year, 3 months ago Modified 1 year,
             3 months ago Viewed 13k times 3 **When i Write my My Nav Bar
              Component Content Directly in My Router Component.
             It works Fine But When I write that content in a NavBar Component 
             it Generates the following error</h3>

        <h1>Details 1</h1>
        <h1>Details 2</h1>
        <h1>Details 3</h1>
    </div>
  )
}

export default ServiceDetails 