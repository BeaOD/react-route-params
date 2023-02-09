import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <nav>
           <Link to='/'><h3>Home</h3></Link> 
           <Link to='/About'><h3>About</h3></Link>
           <Link to='/Contact'><h3>Contact</h3></Link>
           <Link to='/Services'><h3>Services</h3></Link> 
            
        </nav>

        <p> Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re 
          learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.

        It is hard to reuse stateful logic between components
        React does not offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order components that try to solve this. But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow. If you look at a typical React application in React DevTools, you will likely find a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. While we could filter them out in DevTools, this points to a deeper underlying problem: React needs a better primitive for sharing stateful logic.

        With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.</p>
        
        
    </div>
  )
}

export default Contact