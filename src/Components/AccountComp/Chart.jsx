import React,{useContext} from 'react'
import { Bar } from 'react-chartjs-2';
import { ColorContext } from '../../Context/Context'


const Chart = () => {
  const { color } = useContext(ColorContext)
  
const data = {
  
  labels: ['jan 2020', 'jan 2020', 'jan 2020', 'jan 2020', 'jan 2020', 'jan 2020'],
  datasets: [
    {
      label: 'amount',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
       color.mode==='light'? '#27BDAD':'#72FAEC',
      ],
      color:color.mode==='light'? 'black':'white',
      borderWidth: 2
    },
      {
        label: '...',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: [color.mode==='light'? '#27BDAD':'#72FAEC'],
      },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
          
        },
      },
    ],
  },
};


    return (
        <div>
            <Bar className='bar_chart'  data={data} options={options} />
        </div>
    )
}

export default Chart
