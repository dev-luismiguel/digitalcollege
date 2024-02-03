import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./pages/routes";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
