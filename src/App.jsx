
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-main text-brand-dark antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;