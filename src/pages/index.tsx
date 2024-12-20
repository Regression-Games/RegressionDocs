import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const HomepageHeader = () => (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container" style={{textAlign: "left"}}>
        <div className="row">
          <div className="col margin-vert--lg margin-right--md">
            <h1 className="hero__title">Make better games through automated testing</h1>
            <p className="hero__subtitle">Regression Games helps game developers go from zero to one with automated game testing</p>
            <div className={styles.buttons} style={{justifyContent: "left"}}>
              <Link
                className="button button--primary button--outline button--lg"
                to="./getting-started/creating-your-first-automated-test">
                Get Started
              </Link>
            </div>
            <div style={{marginTop: "16px"}}>
              Get started immediately by adding the package to Unity:
              <div style={{marginTop: "16px", fontSize: 12}}>
                <pre style={{display: "inline"}}>https://github.com/Regression-Games/RGUnityBots.git?path=src/gg.regression.unity.bots#v0.0.30</pre>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={require('@site/static/img/demo.gif').default} alt="Regression Games" style={{borderRadius: "12px"}}/>
            <div style={{color: "gray", paddingRight: "24px", fontStyle: "italic"}}>
              Demo of our recording and validation features. Automatically extract game state and begin writing functional tests in minutes.</div>
          </div>
        </div>
      </div>
    </header>
  );

const Home = () => (
    <Layout
      title={`Regression Games Docs`}
      description="Build bots for games">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div className="container text--center">
        <div style={{marginBottom: "64px", marginTop: "32px", fontSize: "1.5em", color: "grey", fontWeight: "bold"}}>
          BACKED BY TIER 1 INVESTORS
        </div>
        <div className="row">
          <div className={clsx('col col--3')}>
            <div className="text--center">
              <a href="https://nea.com/" target="_blank">
                <img style={{height: "60px"}} src={require('@site/static/img/nea.jpg').default} />
              </a>
            </div>
          </div>
          <div className={clsx('col col--3')}>
            <div className="text--center">
              <a href="https://a16z.com/" target="_blank">
                <img style={{height: "100px", marginTop: "-20px"}} src={require('@site/static/img/a16z.jpeg').default} />
              </a>
            </div>
          </div>
          <div className={clsx('col col--3')}>
            <div className="text--center">
              <a href="https://roosh.vc/" target="_blank">
                <img style={{height: "150px", marginTop: "-40px"}} src={require('@site/static/img/roosh.jpeg').default} />
              </a>
            </div>
          </div>
          <div className={clsx('col col--3')}>
            <div className="text--center">
              <a href="https://bbq.capital/" target="_blank">
                <img style={{height: "80px", marginTop: "-00px"}} src={require('@site/static/img/bbq.jpeg').default} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );

export default Home;
