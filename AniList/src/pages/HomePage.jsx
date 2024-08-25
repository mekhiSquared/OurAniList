/** @format */
import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";
const HomePage = () => {
  return (
    <>
      <section id="homepageBkg">
        <img id="logo" src={logo} alt="logo" srcset="" />
        <NavBar />
        <p>Home</p>
      </section>
    </>
  );
};

export default HomePage;
