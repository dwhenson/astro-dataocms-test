import styles from "./Button.module.css"

export default function Button ({href, cta}) {
  const Element = href ? "a" : "button";

  return (
  <Element href={href} className={styles.button}>
    {cta}
  </Element>
  )
}
