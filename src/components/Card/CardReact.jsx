import Button from '../Button/Button';
import styles from './CardReact.module.css';

export default function CardReact({level, src, heading, description, href, cta}) {
  const Heading = `h${level}`;

  return (
    <section className={styles.card}>
      <div className={styles.img}>
        <img src={src} alt="" width="90" height="90"/>
      </div>
      <Heading>
        {heading}
      </Heading>
      <p className={styles.description}>{description}</p>
      <Button href={href} cta={cta} />
    </section>
  );
}
