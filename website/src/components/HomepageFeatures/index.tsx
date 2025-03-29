import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Community Collaboration',
    Svg: require('@site/static/img/undraw_online-collaboration.svg').default, // People working together
    description: (
      <>
        Join a welcoming community of Scala enthusiasts from diverse backgrounds - 
        from business application developers to tooling and compiler engineers. 
        Work in small teams with experienced maintainers guiding the way, ensuring 
        no one gets stuck.
      </>
    ),
  },
  {
    title: 'Improve Scala Tooling',
    Svg: require('@site/static/img/undraw_code-review.svg').default, // Code review/fixing bugs
    description: (
      <>
        Make a real impact on tools you use daily. Fix bugs, add features, and enhance 
        the developer experience for the entire Scala ecosystem. Previous sprints have 
        successfully tackled issues in Metals, Bloop, and scala-cli.
      </>
    ),
  },
  {
    title: 'Valuable Learning Experience',
    Svg: require('@site/static/img/undraw_online-learning.svg').default, // Learning/education
    description: (
      <>
        Gain exposure to different code architectures compared to business applications. 
        Learn the inner workings of Scala tooling through pair programming with experts,
        and feel empowered to contribute your own solutions in the future.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function WhatIsSection() {
  return (
    <div className={styles.whatIs}>
      <div className="container padding-vert--md">
        <div className="row">
          <div className="col col--11 col--offset-1">
            <Heading as="h2" className="text--center">What is a Scala Tooling Spree?</Heading>
            <div className={styles.whatIsContent}>
              <p>
                <span className={styles.paragraphEmoji}>🔄</span> A Scala Tooling Spree is a regular online event where people get together to improve the tools we use every day for Scala development.
              </p>
              <p>
                <span className={styles.paragraphEmoji}>⏱️</span> During each 2-hour session, you'll work in a small team with an experienced maintainer to fix bugs or add features to tools like Metals, Bloop, and scala-cli.
              </p>
              <p>
                <span className={styles.paragraphEmoji}>🚪</span> These events are perfect for anyone who wants to start contributing to Scala tooling. You don't need to be an expert - we'll help you get started!
              </p>
              <p>
                <span className={styles.paragraphEmoji}>🎯</span> Our main goal is to grow the number of people who can contribute to Scala tooling. The more contributors we have, the better our tools become for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className={styles.callToAction}>
      <div className="container text--center padding-vert--md">
        <Heading as="h2">Join Our Next Scala Tooling Spree!</Heading>
        <p className="padding-vert--md">
          No advanced expertise required - just bring your enthusiasm and willingness to learn!
        </p>
        <div className={styles.buttons}>
          <a href="https://forms.gle/yUurzS2KiM2Kwnpc6" target="_blank" className="button button--primary button--lg margin-right--md">Next event</a>
          <a href="docs/events" className="button button--secondary button--lg">Past events</a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <WhatIsSection />
      <CallToAction />
    </>
  );
}