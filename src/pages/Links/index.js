import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Links(){
    return(
    <div className= "links-conteiner">
      <div className= "links-header">
        <Link to = "/">
          <FiArrowLeft size={38} color='#fff'/>
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className='links-item'>
        <button className='link'>
          <FiLink size={18} color="#fff"/>
          https://encurtalink.com.br
        </button>
        <button className='link-delete'>
          <FiTrash size={18} color = "#FF5454"/>
        </button>
      </div>
    </div>
    )
  }
  