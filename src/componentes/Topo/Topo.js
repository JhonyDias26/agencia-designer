import './topo.css';
import Logo from '../../assets/logo.png';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';
import { useState } from 'react';

export default function Topo() {
    const [corTema, setCorTema] = useState(false);
    function alterarCor() {
        setCorTema(!corTema)
    }

    return (
        <header className={corTema ? `tema-escuro` : `tema-claro`}>
            <img src={Logo} alt='imagem-logo' />
            <button onClick={alterarCor} className={ corTema ? 'btn-topo-escuro' : 'btn-topo-claro'}>
                <img src={Moon} className='img-btn' />
            </button>
        </header>
    );
}