import './experiencias.css';

export default function Experiencias(props) {
    return (
        <section className={props.passandoVar ? 'local-experiencias-escuro' : 'local-experiencias-claro'}>
            <section className='experiencias limitar-cessao'>
                <section className='secao-experiencias'>
                    <h2>Experiências De Trabalho</h2>
                    <div className='linha'></div>
                    <p className='paragrafo'>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                    </p>
                </section>
            </section>
        </section>

    );
}