 import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

var colorsCharts = [
  'rgb(  47,  45,  84)',
  'rgb(  67,  64, 124)',
  'rgb(  81,  77, 152)',
  'rgb(  95,  90, 180)',
  'rgb( 109, 104, 208)',
  'rgb( 124, 117, 238)',
  'rgb( 117, 137, 245)',
  'rgb(  80, 174, 229)',
  'rgb(  53, 203, 217)',
  'rgb(   4, 253, 196)'
]

var labelOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const data = {
  labels: labelOptions,
  datasets: [
    {
      label: '# of Votes',
      data: [5, 7, 3, 5, 2, 3,7,8,7,3,],
      backgroundColor: colorsCharts,
      borderColor: [
        'rgba(255, 255, 255, 0.05)'
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
    return <>
              <Pie data={data} />;
          </>
}
