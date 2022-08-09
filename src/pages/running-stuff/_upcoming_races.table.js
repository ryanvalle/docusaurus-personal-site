import React from "react";
import upcoming_races from "./upcoming_races.json";

export const upcomingRaces = upcoming_races;

export const columns = [
    {
      Header: "Days Until Race",
      className: "data-table w15",
      Cell: ({row: { original } }) => {
        const d = new Date(`${original.date}T08:00:00+0800`);
        const today = new Date();
        const day = 1000*60*60*24;
        const daysRemaining = Math.ceil( (d.getTime() - today.getTime()) / day);
        return daysRemaining;
      }
    },
    {
      Header: "Date",
      accessor: "date",
      className: "data-table w15",
      Cell: ({ cell: { value } }) => {
        const d = new Date(`${value}T08:00:00+0800`);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const month = months[d.getMonth()];
        const date = `${month} ${d.getUTCDate()}, ${d.getFullYear()}`;
        return date;
      } 
    },
    {
      Header: "Event",
      accessor: "event",
      className: "data-table w60",
      width: 50,
      Cell: ({ cell: { value }, row: { original } }) => {
        return <a href={`${original.url}`} target="blank" rel="noreferrer noopener">{`${value}`}</a>;
      }
    },
    {
      Header: "Distance",
      accessor: "type",
      className: "data-table w10",
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
      className: "data-table w10",
    }
  ];