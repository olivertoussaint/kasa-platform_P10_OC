import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <main className='main-wrapper error'>
      <h1 className="error">
            <span className='error__number'>404</span>
      </h1>
            <p className="error__text">
                  Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink to="/" className='backToHomePage'>
                 Retourner sur la page d'accueil 
            </NavLink>
    </main>
  )
}

export default ErrorPage