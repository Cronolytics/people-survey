import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import BlueBaloonSad from '../../../assets/images/BlueBaloonSad.png'
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(props) {

  let colorsCharts = [
    'rgb(  47,  45,  84)',
    'rgb(   4, 253, 196)',
    'rgb(  67,  64, 124)',
    'rgb(  53, 203, 217)',
    'rgb(  81,  77, 152)',
    'rgb(  80, 174, 229)',
    'rgb(  95,  90, 180)',
    'rgb( 117, 137, 245)',
    'rgb( 109, 104, 208)',
    'rgb( 124, 117, 238)'
  ]

  let qtdRespostasPorPergunta = props.respostas.map((resposta) => {
    return resposta.qtdRespostas
  });
  
  let labelOptions = props.respostas.map((resposta, index) => {
    return index + 1;
  });

  var qtdTotalRespostas = 0;

  for (let i = 0; i < qtdRespostasPorPergunta.length; i++) {
      qtdTotalRespostas += qtdRespostasPorPergunta[i];
  }
  
  const data = {
    labels: labelOptions,
    datasets: [
      {
        label: '# of Votes',
        data: qtdRespostasPorPergunta,
        backgroundColor: colorsCharts,
        borderColor: [
          'rgba(255, 255, 255, 0.01)'
        ],
        borderWidth: 1,
      },
    ],
  };

  if(qtdTotalRespostas === 0){
    return(
        <div className='no-data-area'>
          <img className='sad-baloon' src={BlueBaloonSad} alt="" />
          <div className='no-data-msg'>
            Pesquisa ainda não respondida
            <br />
            :(
          </div>
        </div>
    )
  }
  else{
    return(
      <>
        <Pie data={data} />;
      </>
    )  
  }
}

export default PieChart;
