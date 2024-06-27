import {Link} from "react-router-dom"

function Home (){
  return (
    <>
      <h1>Welcome</h1>
      <p>Este componente mostrará la página de inicio del portfolio. En esta página, se mostrará una breve descripción del desarrollador.</p>
      <ul>
        <li><Link to={`/projects`}>Projects</Link></li>
        <li><Link to={`/resume`}>Resume</Link></li>
      </ul>
    </>
  )
}

export default Home