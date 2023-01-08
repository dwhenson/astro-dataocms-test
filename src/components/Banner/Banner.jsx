import styles from './Banner.module.css';

export default function Banner({children, theme, style}) {
  return (
    <section theme={theme} className={`${style} ${styles.banner}`} >
        {children}
    </section>
  )
}
