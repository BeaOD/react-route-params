import React from 'react'
import { Link } from 'react-router-dom'
import ServiceDetails from './ServiceDetails'

function Services() {
  return (
    <div>
        <nav>
           <Link to='/'><h3>Home</h3></Link> 
           <Link to='/About'><h3>About</h3></Link>
           <Link to='/Contact'><h3>Contact</h3></Link>
           <Link to='/Services'><h3>Services</h3></Link>
           
             
        </nav>

        <h3>{<ServiceDetails/>}</h3>

        <p> What is a Hook? A Hook is a special function that lets
           you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

         When would I use a Hook? If you write a function component and 
         realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!

         Note:

        There are some special rules about where you can and can not
         use Hooks within a component. We will learn them in Rules of Hooks.

</p>
        
        <p>If these react imports resolve to two different exports objects, you will see this warning. 
          This may happen if you accidentally end up with two copies of the react
           package. </p>
    </div>
  )
}

export default Services