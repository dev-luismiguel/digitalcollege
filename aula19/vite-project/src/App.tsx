import './App.css'
import { HelloWorld, Movie } from './components'

interface Developer {
  avatarUrl: string;
  nome: string;
  cargo: string;
}

const getDevelopers = (): Developer[] => {
  return [
    {
      avatarUrl: 'https://i.pravatar.cc/300',
      nome: 'Fulano',
      cargo: 'Desenvolvedor'
    },
    {
      avatarUrl: 'https://i.pravatar.cc/300',
      nome: 'Cicrano',
      cargo: 'Desenvolvedor Backend'
    },
  ]
}

/*
NavbarDesktop
itens.map...

NavbarMobile
itens.map...

Navbar
itens = [ category ]

*/

function App() {

  const lista = getDevelopers();

  return (
    <div>
      <HelloWorld nome='Fulano'>
        {lista.map((item) => (
          <div>
            <img src={item.avatarUrl} />
          </div>
        ))}
      </HelloWorld>
      <Movie />


      {/* <HelloWorld nome='Cicrano' sobrenome='da Silva' />
      <HelloWorld nome='Beltrano' /> */}
    </div>
  )
}

export default App
