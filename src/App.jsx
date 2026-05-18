import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Cinema from "./pages/Cinema";
import Contact from "./pages/Contact";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Home />
                <About />
                <Projects />
                <Resume />
                <Cinema />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;
