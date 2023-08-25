import ImagemLogo from '../../assets/logo.png';
import ImgFace from '../../assets/facebook.png';
import ImgT from '../../assets/twitter.png';
import ImgLink from '../../assets/linkedin.png';
import ImgDibble from '../../assets/dribble.png';
import ImgBe from '../../assets/behance.png';
import ImgGoo from '../../assets/google-plus.png';
import './rodape.css';

export default function Rodape() {
    return (
        <footer className="rodape limitar-cessao">
            <section className="secao-rodape">
                <div><img src={ImagemLogo} alt='imagem-logo' className='img-logo-rodape' /></div>
                <div className='txt-rodape'>
                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
                    </p>
                </div>
                <div className='combo-imgs'>
                    <img src={ImgFace} alt='img-face' className='img-footer' />
                    <img src={ImgT} alt='img-tw' className='img-footer' />
                    <img src={ImgLink} alt='img-link' className='img-footer' />
                    <img src={ImgDibble} alt='img-di' className='img-footer' />
                    <img src={ImgBe} alt='img-be' className='img-footer' />
                    <img src={ImgGoo} alt='img-google' className='img-footer' />
                </div>
                <div><p>Copyright 2023  <a href="https://www.linkedin.com/in/jhony-dias/">Jhony Dias</a></p></div>
            </section>
        </footer>
    );
}