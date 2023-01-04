import { card } from '../assets';
import styles, { layout } from '../style';;
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    {/* Left side */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better <br className="sm:block hidden"/> Marketing Strategy <br className="sm:block hidden"/> in few easy steps.</h2>
      <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>
        With just a few simple registration steps, you can now formulate an effective marketing strategy for your business.
      </p>
      <Button styles="mt-10" />
    </div>

    {/* Right side */}
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal;