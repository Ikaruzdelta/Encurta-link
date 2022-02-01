import { FiLink} from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu'


export default function Home(){
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
                <input placeholder='Cole seu link aqui...'/>
            </div>
            <button>Encurtar Link</button>
        </div>
        <Menu/>
    </div>
    )
  }
  