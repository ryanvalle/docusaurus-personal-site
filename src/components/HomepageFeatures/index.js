import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Software/Web Developer',
    Svg: require('@site/static/svg/ud_programming.svg').default,
    description: (
      <>
        By profession, I'm a software developer, mainly building web sites and web apps. I've got full stack experience. Currently, I work as a lead software engineer for an e-commerce site.
      </>
    ),
  },
  {
    title: 'I like to run... a lot',
    Svg: require('@site/static/svg/ud_run.svg').default,
    description: (
      <>
        So far, I've ran 19 half marathons (13.1 miles), and 6 marathons (26.2 miles). I'm either crazy or just love running. There'll be some random running content around here.
      </>
    ),
  },
  {
    title: 'Some Other Stuff',
    Svg: require('@site/static/svg/ud_airport.svg').default,
    description: (
      <>
        Travel, photography, sometimes video production, and music are other things I enjoy. I might share some of that content around here too - that's partly what the blog is for.
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
        <h2>Hello!</h2>
        <p>My name is Ryan and welcome to my site. If you're looking to learn more about what I do professionally, then check out the resumé page, or go find me on LinkedIn. Being transparent, I'm not actively searching for work so there's a good chance I'll be unresponsive to recruiters.</p>
        <p>For me, this site is just a place for me to experiment, mess around, and try new things in web and software development that may be interesting to me. For example, I learned about <a href="https://docusaurus.io" target="_blank">Docusuarus</a>, and that became a drive to build this out. It was something new, but offered a lot default functionality to let me get to the fun stuff.</p>
        <p>Lastly, I also want to get back into blogging as a way to share stuff I know with the world. Sure, there's Medium and other online platforms for that, but that doesnt help me with experimenting with web development, so here I am setting something up independently. I have this goal to build this out as a place where I can dump knowledge for the bots to find, to populate search engine indexes, and allow random strangers to find and consume that content to learn. One can dream.</p>
        <p>Thanks for visiting, and enjoy whatever random things you might find here.</p>
        <h2 className={styles.heading}>Quick Summary - Who am I?</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
