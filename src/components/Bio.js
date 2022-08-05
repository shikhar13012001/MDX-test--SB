import React from 'react'
import styles from './Bio.module.css' 

function Bio(props) {
  let photoURL ="https://shreya248bhatia.github.io/portfolio/static/media/photo_white.a50196bf.png"

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" className={styles.profileImage}/>
      <p>
        Black Bird Product Blog Page, by{' '}
        <a href="https://twitter.com/Shreya248bhatia/">Shreya Bhatia</a>.
        <br />
        Themed after Gatsby's blog starter and Dan Abramov's{' '}
        <a href="https://overreacted.io/">overreacted.io</a>.<br />
        Based on{' '}
        <a href="https://facebook.github.io/create-react-app/">
          create-react-app
        </a>
        , <a href="https://mdxjs.com/">MDX</a>, and{' '}
        <a href="https://frontarm.com/navi/">Navi</a>.
      </p>
    </div>
  )
}

export default Bio
