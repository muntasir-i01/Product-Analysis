import './Dashboard.css'
import React, { useEffect, useState } from 'react';
import { data } from 'autoprefixer';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, AreaChart, Area, Tooltip, PieChart, Pie, BarChart, Legend, Bar } from 'recharts';

const Dashboard = () => {

    const[chart, setChart] = useState([]);

    useEffect( () => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setChart(data))
    }, [])


   
      return (
         <div className='chart'>

            <div className='chart'>
                <LineChart width={730} height={250} data={chart}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={"name"} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={"price"} stroke="#8884d8" />
                <Line type="monotone" dataKey={"cc"} stroke="#82ca9d" />
              </LineChart>
           </div>

           <div className='chart'>
             <BarChart width={730} height={250} data={chart}>

               <XAxis dataKey={'name'} />
               <YAxis></YAxis>
               <Tooltip></Tooltip>
               <Legend></Legend>
               <Bar dataKey={'price'} fill={'#4a332d'} />
                </BarChart>
           </div>

           <div className='chart'>
           <AreaChart width={730} height={250} data={chart}
           margin={{top: 20, right: 20, bottom: 20, left: 20,}}>
             <XAxis dataKey={'name'} />
             <YAxis />
             <Area dataKey={'price'} stroke={'#08233a'} fill={'#e1e6ea'}></Area>
             <Tooltip></Tooltip>
           </AreaChart>
           </div>

        </div>
      )
};

export default Dashboard;