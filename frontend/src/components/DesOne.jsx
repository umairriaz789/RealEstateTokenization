import { apple, house1, google } from "../assets";
import { memo } from "react";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img loading="lazy" src={house1} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Real estate investing is notoriously one of the best ways to build generational wealth. Investment properties are excellent long-term investments due to appreciation and are also a great source of passive income. 
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img loading="lazy" src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img loading="lazy" src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default memo(Billing);
