// Components
import Header from '../components/Header';
import PortfolioChart from '../components/PortfolioChart';

// Icons
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';

const styles = {
  wrapper: "w-screen h-screen flex flex-col",
  mainContainer: "w-2/3 h-full m-auto flex mt-16",
  leftMain: "flex flex-col w-3/4 h-full p-6 overflow-y-scroll",
  portfolioAmountContainer: "flex flex-col",
  portfolioAmount: "text-white text-4x1",
  portfolioPercent: "text-white font-bold text-sm",
  pastHour: "text-gray-400",
  chartContainer: 
    "text-5x1 flex justify-center w-full h-1/3 text-white my-11",
  buyingPowerContainer:
    "w-full border-t mb-24 border-b h-16 border-[#30363b] flex justify-between item",
  buyingPowerTitle: "text-white font-bolder text-lg",
  buyingPowerAmount: "text-white font-bold text-xl",
  notice: 
    "flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1",
  noticeContainer: "flex-1",
  noticeTitle: "text-gray-500",
  noticeMessage: "text-white font-bold",
  noticeCTA: "font-bold text-green-500 cursor-pointer mt-5",
  rightMain:
    "flex flex-col flex-1 h-4/5 bg-[#1E2123] mt-6 rounded-lg overflow-y-scroll noScroll",
  rightMainItem: "flex items-center justify-between text-white p-5 border-b border-[#30363b]",
  itemTitle: "flex-1 font-bold",
  moreOptions: "cursor-pointer text-x1"
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.leftMain}>
          <div className={styles.portfolioAmountContainer}>
            <p className={styles.portfolioAmount}>23 ETH</p>
            <p className={styles.portfolioPercent}>
              +0.0008(+0.57%)
              <span className={styles.pastHour}>Past Hour</span>
            </p>
          </div>
          <div>
            <div className={styles.chartContainer}>
              <PortfolioChart />
            </div>
          </div>
          <div className={styles.buyingPowerContainer}>
            <h3 className={styles.buyingPowerTitle}>Buying Power</h3>
            <p className={styles.buyingPowerAmount}>12 ETH</p>
          </div>
          <div className={styles.notice}>
            <div className={styles.noticeContainer}>
              <h3 className={styles.noticeTitle}>Send Funds</h3>
              <p className={styles.noticeMessage}>
                Transfer your funds here.
              </p>
              {/* <BuyTokens /> */}
            </div>
            {/* <Notice /> */}
          </div>
        </div>
        <div className={styles.rightMain}>
          <div className={styles.rightMainItem}>
            <h3 className={styles.rightMainItemTitle}>Crypto Currencies</h3>
            <i>
              <BiDotsHorizontalRounded className={styles.moreOptions} />
            </i>
          </div>
          {/* Map through coins and for every coin make an Asset component */}
          {/* Asset */}

          <div className={styles.rightMainItem}>
            <h3 className={styles.itemTitle}>Lists</h3>
            <i>
              <AiOutlineHome className={styles.moreOptions} />
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}
