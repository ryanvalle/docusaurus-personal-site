import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TextBlock from '@site/src/components/TextBlock';
import GenericHeader from '@site/src/components/GenericHeader';
import DataTable from "@site/src/components/DataTable"; 
import RaceCounterSummary from "@site/src/components/RaceCounterSummary"; 
import Link from '@docusaurus/Link';
import {columns as upcomingRacesColumns, upcomingRaces} from './_upcoming_races.table'
import {columns as previousRacesColumns, previousRaces} from './_previous_races.table'

import './running.module.css';

export default function Running() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | My Personal Site`}
      description="Hello I'm Ryan, and this is just some highlights on my runnign craziness">
      <GenericHeader
        header="Running Stuff"
        subtext="Just a page to my running addiction and accomplishments"
      />
      <main>
        <TextBlock>
          <p>I started running in 2015 when I started training for my first race, a half marathon. After crossing that finishline, I got hooked onto the runner's high. To date, I've ran a lot of miles and collected my medals for a total of:</p>
          <RaceCounterSummary data={previousRaces} />
          <p>To me, running has become a core part of my lifestyle. While many just view it as a workout, to me it's more than that. After a long day of work or going through a busy week, running gives me that escape to just de-stress, get some fresh air, and clear my mind. It's helped me a lot in helping manage my stress in addition to staying fit. In addition, signing up for a running event like a marathon gives me a goal to work towards. This allows me to stay motivated to keep improving myself, and as the event nears, gives me something to look forward to and be excited about. Some may count down the days until the next Comic Con or major holiday. I like to count down the days until my next race.</p>
          <p>Follow me on <Link to="https://www.strava.com/athletes/18849820">Strava</Link></p>
          <h2>Upcoming Races</h2>
          <DataTable columns={upcomingRacesColumns} data={upcomingRaces}/>
          <h2>Previous Races</h2>
          <DataTable columns={previousRacesColumns} data={previousRaces}/>
        </TextBlock>
      </main>
    </Layout>
  );
}
