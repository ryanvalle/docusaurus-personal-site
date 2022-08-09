import React from "react";
import previous_races from "./previous_races.json";

export const previousRaces = previous_races;

export const columns = [
    {
      Header: "Date",
      accessor: "date",
      className: "data-table",
      Cell: ({ cell: { value } }) => {
        const d = new Date(`${value}T08:00:00+0800`);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const month = months[d.getMonth()];
        const date = `${month} ${d.getUTCDate()}, ${d.getFullYear()}`;
        const today = new Date();
        const day = 1000*60*60*24;
        const daysRemaining = Math.ceil( (d.getTime() - today.getTime()) / day);
        if (daysRemaining >= 0) {
          return <span><b>{`${date}`}</b> • <i>{`${daysRemaining}`} days until race</i></span>
        } else {
          return <span><b>{`${date}`}</b></span>
        }
      } 
    },
    {
      Header: "Event",
      accessor: "event",
      className: "data-table"
    },
    {
      Header: "Finish Time",
      accessor: "finish_time",
      className: "data-table"
    },
    {
      Header: "Results",
      accessor: "results",
      className: "data-table",
      Cell: ({ cell: { value }, row: { original } }) => {
        if (!!value) {
          return <a href={`${original.results}`} target="blank" rel="noreferrer noopener">View Results</a>;
        } else {
          return '';
        }
      }
    },
    {
      Header: "Distance",
      accessor: "type",
      className: "data-table",
      Cell: ({ cell: { value } }) => {
        let text = value;
        switch(value){
          case 'marathon':
            text = '26.2 miles';
            break;
            case 'half':
              text = '13.1 miles';
              break;
            case '10k':
              text = '6.21 miles';
              break;
            case '5k':
              text = '3.1 miles';
              break;
        }
        return text;
      } 
    },
    {
      Header: "Location",
      accessor: "location",
      className: "data-table twenty",
    },
    {
      Header: "Recap Video",
      accessor: "recap_video",
      className: "data-table",
      Cell: ({ cell: { value }, row: { original } }) => {
        if (!!value) {
          return <a href={`${original.recap_video}`} target="blank" rel="noreferrer noopener">Watch on YouTube</a>;
        } else {
          return '';
        }
      }
    }
  ];