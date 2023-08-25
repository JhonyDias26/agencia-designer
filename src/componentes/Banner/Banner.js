import ImagemBanner from '../../assets/banner.png';
import './banner.css';

export default function () {
    return (
        <section className="secao-banner">
            <section className='secao1'>
                <img src={ImagemBanner} className='img-banner' alt='imagem-banner' />
            </section>
            <section className='secao2'>
                <p className='p1'>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <p className='p2'>e design digital</p>
            </section>
        </section>
    );
}