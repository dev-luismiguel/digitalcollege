import { useEffect, useState } from "react";
import { DevApiModel } from "../../api/api.props";
import { getDevs } from "../../api/api";
import { Card, CardList } from "../../component";
import { useTheme } from "../../contexts/ThemeContext";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [devList, setDevList] = useState<DevApiModel[]>([]);

  const { theme, toggleTheme } = useTheme();

  const filteredList = devList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getDevs().then((result) => setDevList(result));
  }, []);

  return (
    <div>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {theme}
      <button onClick={() => toggleTheme()}>Trocar tema</button>
      <CardList>
        {filteredList.map((dev, index) => (
          <Card
            key={index}
            imageUrl={dev.profileUrl}
            title={dev.name}
            subtitle={dev.role}
          />
        ))}
      </CardList>
    </div>
  );
};
