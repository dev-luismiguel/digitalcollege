import { useEffect, useState } from "react";
import { DevResult } from "../../api/api.props";
import { getDevs } from "../../api/api";
import { Card, CardList } from "../../component";
import { useTheme } from "../../contexts/ThemeContext";

export const HomePage = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [devList, setDevList] = useState<DevResult[]>([])

  const { theme, toggleTheme } = useTheme();

  const filteredList = devList.filter((item) =>
    // item.name.toLowerCase().includes(searchTerm.toLowerCase())
    item.name.toLowerCase().includes("")
  );

  useEffect(() => {
    console.log('useEffect')
    getDevs().then(result => setDevList(result))
  }, []);

  return (
    <div>
      {theme}
      <button onClick={() => toggleTheme()}>Trocar tema</button>
      <CardList>
        {filteredList.map((dev) => (
          <Card
            key={dev.id}
            imageUrl={dev.profileUrl}
            title={dev.name}
            subtitle={dev.office}
          />
        ))}
      </CardList>
    </div>
  );
}
