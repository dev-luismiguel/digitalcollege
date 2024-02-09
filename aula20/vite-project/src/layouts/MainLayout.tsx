import { Outlet } from "react-router-dom";
import { Navbar } from "../component";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar
        title="App Legal"
        // onFilterChange={(term) => setSearchTerm(term)}
      />
      <Outlet />
    </>
  );
};
