import React, { Suspense, lazy } from 'react';
import styles from "../style";

const Hero = lazy(() => import('./Hero'));
const Business = lazy(() => import('./Business'));
const Billing = lazy(() => import('./Billing'));
const DesOne = lazy(() => import('./DesOne'));
const Stats = lazy(() => import('./Stats'));
const Footer = lazy(() => import('./Footer'));
const Testimonials = lazy(() => import('./Testimonials'));
const CardDeal = lazy(() => import('./CardDeal'));


const Home = () => {
  return (
    <div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Suspense>
            <Hero />
          </Suspense>
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Suspense>
            <Stats />
          </Suspense>
          <Suspense>
            <Business />
          </Suspense>
          <Suspense>
            <DesOne />
          </Suspense>
          {/* <Suspense>
            <Billing />
          </Suspense> */}
          <Suspense>
            <CardDeal/>
          </Suspense>
          <Suspense>
            <Testimonials />
          </Suspense>
          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </div>


    </div>
  )
}

export default Home;
