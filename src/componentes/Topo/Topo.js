import './topo.css';
import Logo from '../../assets/logo.png';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';


export default function Topo(props) {


    return (
        <header className={props.passandoVar ? `tema-escuro` : `tema-claro`}>
            <img src={Logo} alt='imagem-logo' />
            <button onClick={props.passandoFunc} className={props.passandoVar ? 'btn-topo-escuro' : 'btn-topo-claro'}>
                <img src={props.passandoVar ? Sun : Moon} className='img-btn' />
            </button>
        </header>
    );
}