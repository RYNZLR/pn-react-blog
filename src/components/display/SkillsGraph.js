import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Laravel', level: 8,
  },

  {
    name: 'ASP .NET', level: 7,
  },

  {
    name: 'Java', level: 7.5,
  },

  {
    name: 'NodeJS', level: 7.5,
  },

  {
    name: 'MySQL', level: 7,
  },


  {
    name: 'HTML/CSS/JS', level: 8.5,
  },


  {
    name: 'React', level: 7,
  },
  
];

export default class Example extends PureComponent {

  render() {
    return (
    <ResponsiveContainer width="95%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0,10]} />
        <Tooltip cursor={{fill: 'transparent'}}   />
        <Legend />
        <Bar dataKey="level" fill="#14C7FF" fillOpacity="0.6" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
