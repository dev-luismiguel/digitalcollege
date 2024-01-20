import { useState } from "react";
import { Card, CardList, Navbar } from "./component";

const listaDeDesenvolvedores = [
  {
    profileUrl: "https://i.pravatar.cc/150?img=1",
    name: "João Silva",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=2",
    name: "Maria Santos",
    office: "Desenvolvedor Front-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=3",
    name: "Pedro Alves",
    office: "Desenvolvedor Full-stack",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=4",
    name: "Ana Rodrigues",
    office: "Desenvolvedor Mobile",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=5",
    name: "Carlos Pereira",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=6",
    name: "Mariana Oliveira",
    office: "Desenvolvedor Front-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=7",
    name: "Luís Ferreira",
    office: "Desenvolvedor Full-stack",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=8",
    name: "Isabel Costa",
    office: "Desenvolvedor Mobile",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=9",
    name: "José Santos",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=10",
    name: "Sofia Pereira",
    office: "Desenvolvedor Front-end",
  },
];

function App() {
  const [filtro, setFiltro] = useState("");

  return (
    <div>
      <Navbar />

      <input onChange={(e) => setFiltro(e.target.value)} />

      <CardList>
        {listaDeDesenvolvedores.map((dev) => (
          <Card
            imageUrl={dev.profileUrl}
            title={dev.name}
            subtitle={dev.office}
          />
        ))}
      </CardList>
    </div>
  );
}

export default App;
