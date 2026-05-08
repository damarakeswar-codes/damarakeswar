import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ParticleBackground from './components/layout/ParticleBackground';
 
function App() {
  return (
    <ThemeProvider>
      <ParticleBackground />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;