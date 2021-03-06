import logo from './imagens/logo.png';
import home from './imagens/home.png';
import mensagem from './imagens/mensagem.png';
import adicionar from './imagens/adicionar.png';
import bussola from './imagens/bussola.png';
import coracao from './imagens/coracao.png';
import perfil from './imagens/perfil.jpg';

function Header() {
  return (
    <>
      <header>
        <div className="header-border">
          <div className="container-header">
              <div>
                <img src={logo} className="logo" alt="logo" />
              </div>       

              <div className="barra">
                <input type="text" className="pesquisa" placeholder="Pesquisa"></input>
              </div>

              <nav>
                <div className="links">
                  <img src={home} className="home" alt="home" />
                  <img src={mensagem} className="mensagem" alt="mensagem" />
                  <img src={adicionar} className="adicionar" alt="adicionar" />
                  <img src={bussola} className="bussola" alt="bussola" />
                  <img src={coracao} className="coracao" alt="coração" />
                  <img src={perfil} className="perfil" alt="perfil" />
                </div>
              </nav>
          </div>
        </div>        
      </header>
    </>
  );
}

export default Header;
