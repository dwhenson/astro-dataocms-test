import styles from './Banner.module.css';
import Button from '../Button/Button';

export default function Banner({children, theme, href, cta, style}) {
  return (
    <section theme={theme} className={`${style} ${styles.banner}`} >
        {children}
        {href && <Button href={href} cta={cta}/>}
    </section>
  )
}
