import ImagemBanner from '../../assets/banner.png';
import './banner.css';

export default function (props) {
    return (
        <section className='banner'>
            <section className="secao-banner">
                <section className= {props.passandoVar ? 'secao1-escuro' : 'secao1-claro'}>
                    <img src={ImagemBanner} className='img-banner' alt='imagem-banner' />
                </section>
                <section className={props.passandoVar ? 'secao2-escuro' : 'secao2-claro'}>
                    <p className='p1'>BRANDING / UI / UX / TECNOLOGIA</p>
                    <h2>Agência de Branding</h2>
                    <p className='p2'>e design digital</p>
                </section>
            </section>
        </section>
    );
}