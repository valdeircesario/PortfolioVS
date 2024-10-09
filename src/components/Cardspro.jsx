import Styles from './Cardpro.module.css';

function Cardpro({ imgSrc, coverSrc, altText }) {
  return (
    <div className={Styles.book}>
      <img src={imgSrc} alt={altText} />
      <div className={Styles.cover}>
        <img src={coverSrc} alt={altText} />
      </div>
    </div>
  );
}

export default Cardpro;