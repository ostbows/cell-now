import { css } from '@emotion/css';
import {container, flex, btn, textCenter} from '../styles/utilities';

function Showcase() {
  return (
    <section className={css`
      height: 400px;
      background-color: var(--primary-color);
      color: #fff;
      position: relative;
      ::after {
        content: '';
        position: absolute;
        height: 100px;
        bottom: -70px;
        right: 0;
        left: 0;
        background: #fff;
        transform: skewY(-3deg);
        -webkit-transform: skewY(-3deg);
        -moz-transform: skewY(-3deg);
        -ms-transform: skewY(-3deg);
      }
    `}>
      <div className={css`
        ${container}
        ${flex}
      `}>
        <div className={css`
          ${textCenter}
          max-width: 500px;
        `}>
          <h1 className={css`
            font-size: 40px;
          `}>We Sell Phones</h1>
          <p className={css`
            margin: 20px 0;
          `}>Smartphones are super useful nowadays. Basically everyone has one. You can make calls or listen to your favourite mp3s</p>
          <a className={btn({outline: true})} href="#!">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Showcase;