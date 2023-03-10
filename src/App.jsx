import React from 'react'
import styles from './style';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero} from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">

      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero */}
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Other */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />x
          <Footer />
        </div>
      </div>

    </div>
);

export default App