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
        With replay features, validation libraries, CI/CD integration, and more, Regression Games
        is building the best platform for AI agent development.
      </>
    ),
  },
  {
    title: 'Ease of Integration',
    image: require('@site/static/img/ai (3).png').default,
    description: (
      <>
        Whether you are building an MMORPG or a simple 2D platformer, the Regression Games SDK
        follows a simple integration pattern to get you up and running quickly.
      </>
    ),
  },
  {
    title: 'Bot Versatility',
    image: require('@site/static/img/ai (2).png').default,
    description: (
      <>
        Bots on Regression Games can click through menus, control spawned characters, play test with humans, 
        validate behaviors, and more.
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
