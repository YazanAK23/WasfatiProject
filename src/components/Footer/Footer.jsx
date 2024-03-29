import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
  return (
    <footer className='footer'>
        <div className="logo">
            <Link className="navbar-brand"><FontAwesomeIcon icon="fa-solid fa-utensils" /> wasfaty <FontAwesomeIcon icon="fa-solid fa-utensils" /></Link>
        </div>
        <span className='copyRight'>Copyright &copy; 2024 wasfaty.</span>
    </footer>
  )
}

export default Footer