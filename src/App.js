import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RoutePage from "./components/Routes/route";

const App = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <RoutePage />
      </div>
      <Footer />
    </>
  );
}
export default App;
