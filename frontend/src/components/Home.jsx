import React, { Suspense, lazy } from 'react'
// import Hero from './Hero';
import styles from "../style";
// import Footer from './Footer';
// import Stats from './Stats';
// import Business from './Business';
// import Billing from './Billing';
// import DesOne from './DesOne';

const Hero = lazy(() => import('./Hero'));
const Business = lazy(() => import('./Business'));
const Billing = lazy(() => import('./Billing'));
const DesOne = lazy(() => import('./DesOne'));
const Stats = lazy(() => import('./Stats'));
const Footer = lazy(() => import('./Footer'));


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
          {/* <Suspense>
            <Business />
          </Suspense> */}
          {/* <Suspense>
            <DesOne />
          </Suspense> */}
          {/* <Suspense>
            <Billing />
          </Suspense> */}
          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </div>


    </div>
  )
}

export default Home;
