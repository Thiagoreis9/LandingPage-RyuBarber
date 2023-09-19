import React, { useState } from 'react';
import './style.css';


const LandingPage = () => {

    const [modo , setNovoModo] = useState('modo-light');
    const [logo, setLogo] = useState('assets/barbearia-logo-black.png');
    const [icone, setIcone] = useState('assets/moon.png');
    const [nome, setNome] = useState('Dark');
 
    const switchMode = () => {
        
        if (modo === 'modo-light') {
            setNovoModo('modo-dark');
            setLogo('assets/barbearia-logo-white.png');
            setIcone('assets/sun.png');
            setNome('Light');
        } else {
            setNovoModo('modo-light');
            setLogo('assets/barbearia-logo-black.png');
            setIcone('assets/moon.png');
            setNome('Dark');
        }
        console.log(modo)
    }

return (
    <div className={ modo }>
        <header className='limitar-secao'>
            <img src={ logo } alt="logo da barbearia." />
            <button className={ modo } onClick={switchMode}>
                <img src={ icone } alt="logo da barbearia." />
                { nome }
            </button>
        </header>
        <main>
            <section className='secao-banner limitar-secao'>

            </section>
            <section className='secao-texto'>
                <h1>Bem-vindo a Barber Shop</h1>
                <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                <p>S. Kelly</p>
            </section>
        </main>
    </div>
);
}

export default LandingPage;