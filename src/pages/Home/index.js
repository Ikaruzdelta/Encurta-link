import { FiLink} from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu'
import {useState} from 'react';
import LinkItem from '../../components/LinkItem';

export default function Home(){

    const [linkEntrada, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    function encurta(){
        setShowModal(true);
    }

    return(
    <div className="conteiner-home">
        <div className="logo">
            <img src = "/logo.png" alt = "encurtaLink Logo" />
            <h1>EncurtaLink</h1>
            <span>Encurte seu link!</span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color = "#fff" />
                <input
                placeholder='Cole seu link aqui...'
                value={linkEntrada}
                onChange={(e) => setLink(e.targent.value)}
                />
            </div>
            <button onClick={encurta}>Encurtar Link</button>
        </div>
        <Menu/>
        {showModal && (
        <LinkItem
            closeModal = {() => setShowModal(false)}
        />
        )}
    </div>
    )
  }
  