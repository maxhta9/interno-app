import "../assets/CSS/App.css";
import Header from "../containers/header.container";
import Footer from "../containers/footer.container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <body className="App-body text-3xl">
        
      </body>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
