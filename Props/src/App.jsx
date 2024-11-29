import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />

      <div className="cards">
        <Card title="card 1" discription="card 1 desc"/>
        <Card title="card 2" discription="card 2 desc"/>
        <Card title="card 3" discription="card 3 desc"/>
        <Card title="card 4" discription="card 4 desc"/>
      </div>
      <Footer />
    </>
  );
}

export default App;
