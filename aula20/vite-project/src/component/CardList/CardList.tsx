import { Card } from "../Card/Card";
import styles from "./CardList.module.css";
import { CardListProps } from "./CardList.props";

const listaDeDesenvolvedores = [
  {
    profileUrl: "https://i.pravatar.cc/150?img=1",
    name: "Desenvolvedor 1",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=2",
    name: "Desenvolvedor 2",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=3",
    name: "Desenvolvedor 3",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=4",
    name: "Desenvolvedor 4",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=5",
    name: "Desenvolvedor 5",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=6",
    name: "Desenvolvedor 6",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=7",
    name: "Desenvolvedor 7",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=8",
    name: "Desenvolvedor 8",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=9",
    name: "Desenvolvedor 9",
    office: "Desenvolvedor Back-end",
  },
  {
    profileUrl: "https://i.pravatar.cc/150?img=10",
    name: "Desenvolvedor 10",
    office: "Desenvolvedor Back-end",
  },
];

export const CardList: React.FC<CardListProps> = () => {
  return (
    <div className={styles.list}>
      {listaDeDesenvolvedores.map((desenvolvedor) => (
        <Card
          imageUrl={desenvolvedor.profileUrl}
          title={desenvolvedor.name}
          subtitle={desenvolvedor.office}
        />
      ))}
    </div>
  );
};
