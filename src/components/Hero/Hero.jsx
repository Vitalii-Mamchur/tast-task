import Button from '../UI/Button';
import './Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg">
        <div className="hero-text">
          <h1>Test assignment for front-end developer</h1>
          <p>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button type="button" text="Sign up" class="button" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
