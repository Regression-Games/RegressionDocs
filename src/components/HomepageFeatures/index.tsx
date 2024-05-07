import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'A Plethora of Features',
    image: require('@site/static/img/ai_1.png').default,
    description: (
      <>
        Regression Games is building the best platform for game test automation with replay features,
        validation libraries, CI/CD integration, and more.
      </>
    ),
  },
  {
    title: 'Ease of Integration',
    image: require('@site/static/img/ai (3).png').default,
    description: (
      <>
          Ease of integration is one of our top priorities, and it shows. As soon as you add the SDK, data and deep
          state info is collected, without custom code needed.
      </>
    ),
  },
  {
    title: 'Bot Versatility',
    image: require('@site/static/img/ai (2).png').default,
    description: (
      <>
          Regression Games interfaces are built for a variety of teams, even those who may not have code access. Our
          intuitive functional testing builder allows anyone to make tests.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
