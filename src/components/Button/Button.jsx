import styles from "./Button.module.css"

export default function Button ({href, cta, style = ""}) {
  const Element = href ? "a" : "button";

  return (
  <Element href={href} className={`${styles.button} ${style}`}>
    {cta}
  </Element>
  )
}
