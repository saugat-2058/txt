import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" onClick={props.home} to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" onClick={props.home} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" >{props.aboutText}</Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">{props.change}</a>
          </li> */}
  
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className='form-check-input' type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckChecked"  />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {`${(props.mode==='light')?'dark':'light'}`} mode</label>
</div>
      </div>
    </div>
  </nav>
//     <nav className="navbar navbar-expand-lg bg-light">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="/">{title}</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/">{aboutText}</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/">{change}</a>
//           </li>
  
//         </ul>
//         <form className="d-flex" role="search">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form>
//       </div>
//     </div>
//   </nav>
  )
}
Navbar.propType={
                title: PropTypes.string.isRequired,
                aboutText: PropTypes.string.isRequired,
                change: PropTypes.number
}
//proptype are basically used to specify the  data type passed in the certain named props  here i have sent the title as the string and otther too but i have specified heree that i am passing  the proptype string here if i have to pass the number i have to write the proptype number , obj , etc


//default props in  
//if i pass the  donot pass the prop but defined here then i will use default props to prevent the eror
Navbar.defaultProps={
    title:"Set title Here",
    aboutText:"About"
}