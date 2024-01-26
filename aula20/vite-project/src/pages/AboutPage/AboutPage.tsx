import { Link, useNavigate, useParams } from "react-router-dom";

type AboutPageParams = {
    name: string;
};

export const AboutPage = () => {
  const navigate = useNavigate();
  const { name } = useParams<AboutPageParams>();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>About Page, {name}</h1>
      <a href="/">Return</a>
      <Link to="/">Return</Link>
      <div onClick={() => navigate(-1)}>Return</div>
    </div>
  );
};
