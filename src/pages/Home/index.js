import { FiLink} from 'react-icons/fi';
import './home.css';
import {useState} from 'react';
import LinkItem from '../../components/LinkItem';
import api from '../../services/api';

export default function Home(){

    const [linkEntrada, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({})

    async function encurta(){
        try{
            const response = await api.post('/shorten', {
                long_url: linkEntrada
            })
            setData(response.data);
            setShowModal(true);
            setLink("");
        }catch{
            alert("Ops! Parece que algo deu errado");
            setLink("");
        }
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
                onChange={(e) => setLink(e.target.value)}
                />
            </div>
            <button onClick={encurta}>Encurtar Link</button>
        </div>
        {showModal && (
        <LinkItem
            closeModal = {() => setShowModal(false)}
            content={data}
        />
        )}
    </div>
    )
  }
  