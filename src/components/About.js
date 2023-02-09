import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <nav>
           <Link to='/'><h3>Home</h3></Link> 
           <Link to='/About'><h3>About</h3></Link>
           <Link to='/Contact'><h3>Contact</h3></Link>
           <Link to='/Services'><h3>Services</h3></Link> 
            
        </nav>

        <p> Hooks are a new addition in React 16.8.
           They let you use state and other React features without writing a class.</p>
        
        <p>Before we continue, note that Hooks are
          Completely opt-in. You can try Hooks in a few components 
          without rewriting any existing code. But you don’t have to learn or
           use Hooks right now if you don’t want to.
          100% backwards-compatible. Hooks don’t contain any breaking changes.
          Available now. Hooks are now available with the release of v16.8.0.
          There are no plans to remove classes from React. 
          You can read more about the gradual adoption strategy for Hooks in 
          the bottom section of this page. </p>
    </div>
  )
}

export default About