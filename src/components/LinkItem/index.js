import './link-item.css';
import {FiX, FiClipboard} from 'react-icons/fi';

export default function LinkItem({closeModal}){
    return(
        <div className='modal-container'>
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX Size={28} color="#000"/>
                </button>
            </div>
            <span>
                aqui é pra ser o site
            </span>
            <button className='modal-link'>
                aqui fica o encurtado
                <FiClipboard size={20} color="FFF"/>
            </button>

        </div>
    )
}