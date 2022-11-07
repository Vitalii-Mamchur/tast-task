import Button from '../UI/Button';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      {/* <div className="hero-bg"> */}
      <div className={styles.heroText}>
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button type="button" class="button100" text="Sign up" />
      </div>
    </div>
    // </div>
  );
}

export default Hero;
