import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WifiSection from './components/WifiSection';
import Reviews from './components/Reviews';
import Amenities from './components/Amenities';
import UniqueRoom from './components/UniqueRoom';
import DoubleRoom from './components/DoubleRoom';
import InstagramFeed from './components/InstagramFeed';
import History from './components/History';
import GuestGuidelines from './components/GuestGuidelines';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-viking-gold selection:text-viking-dark">
      <Navbar />
      <main>
        <Hero />
        <WifiSection />
        <Reviews />
        <Amenities />
        <UniqueRoom />
        <DoubleRoom />
        <InstagramFeed />
        <History />
        <GuestGuidelines />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

