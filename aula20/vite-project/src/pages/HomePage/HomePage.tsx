import { useEffect, useState } from "react";
import { DevResult } from "../../api/api.props";
import { getDevs } from "../../api/api";
import { Card, CardList, Navbar } from "../../component";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [devList, setDevList] = useState<DevResult[]>([])

  const filteredList = devList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getDevs().then(result => setDevList(result))
  }, []);

  return (
    <div>
      <Navbar title="App Legal" onFilterChange={(term) => setSearchTerm(term)} />
      <CardList>
        {filteredList.map((dev) => (
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
