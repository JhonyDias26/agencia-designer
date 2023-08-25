import './topo.css';
import Logo from '../../assets/logo.png';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';

export default function Topo (){

    return(
        <header className={`tema-claro`}>
            <img src={Logo} alt='imagem-logo' />
            <button  className='btn-topo'>
                <img src= { Moon }  className='img-btn' />
            </button>
        </header>
    );
}