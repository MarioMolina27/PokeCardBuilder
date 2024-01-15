import "./Page404.css";
import { useNavbar } from "../../hooks/useNavbar.js";
import { useEffect } from "react";

const Page404 = () => {
  const { setActiveLink } = useNavbar()

  useEffect(() => {
    setActiveLink("/404")
  }, [])

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center flex-grow-1">
      <h2 className="title-404">
        4<span className="important-404">0</span>4
      </h2>
      <h3 className="not-found-text">not found</h3>
    </div>
  );
};

export default Page404;
