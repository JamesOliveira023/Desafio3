import './App.css'
import linkdin from './assets/linkdin.svg';
import git from './assets/git.svg';
import figma from './assets/figma.svg'
import projeto1 from './assets/projeto1.jpg'
import projeto2 from './assets/projeto2.jpg'

function App() {
  
  return (
    <>
       <div class="titulo">
      <header class="header">
  <nav class="nav-bar">
    <ul>
      <li><a href="#">Projetos</a></li>
      <li><a href="#">Tecnologia</a></li>
      <li><a href="#">Sobre mim</a></li>
        </ul>
  </nav>
    <a href="https://www.linkedin.com/in/james-rodrigo/">
    <img class='img1' src={linkdin} alt="linkdin" />
    </a>
    <a href="https://github.com/JamesOliveira023">
    <img class='img2'  src={git} alt="git" />
    </a>
  </header>
  </div>
    <h1 class="titulo-principal">Ola,sou James Desenvolvedor FullStack</h1>
    <p id='sub-titulo'>Estou atualmente em um processo de transição de carreira,
    buscando novos caminhos<br/> e oportunidades para expandir meus horizontes profissionais.<br/>
    Minha jornada envolve exploração, aprendizado e crescimento,<br/>
    enquanto me preparo para abraçar os desafios e realizações que estão por vir.</p>
  <button class="button">Saber Mais</button>
<div>
  <h3 id='h3'>Projetos</h3>

  <div className="card-container">
  <div  className="card">
    
     <img class="img3" src={projeto1} alt="Descrição da Imagem 1" />
     <h4 className='CardCSS'>Projeto 1</h4>
     <p className='SubDescrição'>Projeto de pesquisa de informação de paises , nele vc encontra os dados básicos de casa pais pesquisado.</p>
    <a href="https://pesquiseopais.netlify.app/">
     <button className="card-button">Clique aqui</button>
     </a>
  </div>
  <div className="card">
            
              <img className='img4' src={projeto2} alt="Descrição da Imagem 2"/>
              <h5 className='CardCSS'>Projeto 2</h5>
              <p className='SubDescrição'>Desenvolvimento de uma landingPage , onde foi a primeira criada do zero. </p>
              <a href="https://github.com/JamesOliveira023/LandingPage">
              <button className="card-button">Clique aqui</button>
              </a>            
          </div>       
        </div>
    </div>
   <div className="timeline">
  <div className="marker" data-label="1">2020</div>
  <div className="marker" data-label="2"></div>
  <div className="marker" data-label="3"></div>
  <div className="marker" data-label="4"></div>
</div>
    <div>
    <footer>
            <div className="footer-content">
                <p>Entre em contato:</p>
                <ul>
                    <li>
                        <div>Telefone </div>
                        <div> 3456-789</div>
                    </li>
                    <li>
                        <div>Email</div>
                        <div> contato@empresa.com</div>
                    </li>
                </ul>
                <img className='logo1' src={git} alt="Logo 1" />
                <img className='logo2' src={linkdin} alt="Logo 2" />
                <img className='logo3' src={figma} alt="Logo 3" />
            </div>
           
                
        </footer>
    </div>
    </>
  )
}

export default App
