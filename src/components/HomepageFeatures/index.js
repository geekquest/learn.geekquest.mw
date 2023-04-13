import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Aimed at Growing Skills',
    Uri: require('@site/static/img/3946714.jpg').default,
    alt: 'Image by <a href="https://www.freepik.com/free-vector/illustrated-flat-dance-fitness-home_12811092.htm#query=training%20gym&position=48&from_view=search&track=ais">Freepik</a>',
    description: (
      <>
        Our goal with GeekQuest Learn is to help bridge the skills gap between learning and practicing developers.
      </>
    ),
  },
  {
    title: 'Unearthing Malawian Talent',
    Uri: require('@site/static/img/6770986.jpg').default,
    description: (
      <>
        Malawi has a lot of talented folks who have ideas, opinions and cool projects. GeekQuest will help unearth these gems so they can shine.
      </>
    ),
  },
  {
    title: 'Powered by the Community',
    Uri: require('@site/static/img/high-five.png').default,
    alt: '<a href="https://www.freepik.com/free-vector/programmer-concept-illustration_8611162.htm#query=computer&position=28&from_view=search&track=sph">Image by storyset</a> on Freepik',
    description: (
      <>
       All content on this site is contributed by passionate community of contributors who strive to learn from and teach their peers.
      </>
    ),
  },
];

function Feature({Uri, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={Uri} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
