import './menu.css';
import{BsYoutube, BsInstagram} from 'react-icons/bs';
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className = "Menu">
            <a className = "Social" href = "https://youtube.com/c/ikaruz">
                <BsYoutube color = "#fff" size = {24}/>
            </a>
            <a className = "Social" href = "https://instagram.com/ikaruzofficial">
                <BsInstagram color = "#fff" size = {24}/>
            </a>
            <links className = "Menu-item" to = "/links">
                Meus Links
            </links>
        </div>
    )
}