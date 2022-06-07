import { useState, useEffect } from 'react'
import Menu from "../Menu"

import './style.css'

const Projects = () => {

  const [repos, setRepos ] = useState([]) 

  useEffect(() => {
    fetch('https://api.github.com/users/thmano/repos')
    .then( response => response.json())
    .then( data => setRepos(data) )
  },[])
    return(
        <div>
             <Menu />
             <div className="display">
            <h1>Projetos</h1>
            <ul>
            {repos.map(data  => {
              return(
                <>
                  <li>Nome: {data.name}</li>
                  <li>Descirption: {data.description}</li>
                  <br/>
                </>
              )
            })}
            </ul>

          </div>
        </div>
    )
   }
   export default Projects