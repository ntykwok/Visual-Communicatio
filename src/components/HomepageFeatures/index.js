import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Design Principles',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Why my boss&apos; design always gives my 1900s vibe?
        How to visualize eveything while balancing distraction and attention?

      </>
    ),
  },
  {
    title: 'Visualization Technology',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        In 2023, we all get fasinated by AI-generated-words <code>ChatGPT</code>. 
        Here we will briefly introduce AI-generated-art <code>Mid-Journey</code>, 
        allowing you to levarage the power of 2023 to visualize yourself.
      </>
    ),
  },
  {
    title: 'Interact with the Audience',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Extend and customize your design into a <code>UI - User Interface</code>, 
        while we add interaction and design the audience journey. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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