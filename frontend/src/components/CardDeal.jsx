// import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { FetchUSDT } from "./Dashboards/frontend/USDT/FetchUSDT";
import { FetchBUSD } from "./Dashboards/frontend/USDC/FetchBUSD";

const CardDeal = () => (
  
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      {/* <h2 className={styles.heading2}>
      Accepted Stable Coin<br className="sm:block hidden" /> Current Price
      </h2> */}
      <FetchBUSD/>
    </div>

    <div className={layout.sectionImg}>
      <FetchUSDT/>
    </div>
  </section>
);

export default CardDeal;
