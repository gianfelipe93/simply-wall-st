import React, { useEffect, useState } from 'react'
import Score from '../types/Score'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { VALUE, DIVIDEND, INCOME, PAST, FUTURE, HEALTH } from "../util/constants";

const colorGradient = [
  [255, 0, 0],
  [204, 51, 0],
  [153, 102, 0],
  [102, 153, 0],
  [0, 255, 0],
];

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type ChartProps = {
  score: Score
}

type ChartData = {
  labels: string[]
  datasets: {
    data: number[]
    backgroundColor: string
    borderColor: string
    borderWidth: number
  }[]

}

const Chart = (props: ChartProps) => {
  const { t } = useTranslation()
  const LABELS = [t(VALUE), t(DIVIDEND), t(INCOME), t(PAST), t(FUTURE), t(HEALTH)];

  const [chartData, setChartData] = useState<ChartData>()
  const { score } = props

  useEffect(() => {
    const scoreData = getScoreData()
    const scoreAvg = Math.round(score.total / LABELS.length);

    const data = {
      labels: LABELS,
      datasets: [
        {
          data: scoreData,
          backgroundColor: getChartColor(scoreAvg, true),
          borderColor: getChartColor(scoreAvg),
          borderWidth: 1,
          justifyContent: 'center',
          width: '100%',
          elements: {
            line: {
              borderWidth: 0.4,
              radius: 5,
              tension: .2,
              color: 'white'

            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
            label: {
              color: 'white',
            },
            legend: {
              display: false
            }
          }
        },
      ],
    };

    setChartData(data)
  }, [])


  const getScoreData = () => {
    const datasetData = LABELS.map((label: string): number => {
      const scoreValue: number | string = score[label.toLowerCase() as keyof Score];

      if (typeof scoreValue === 'number') {
        return scoreValue;
      }

      return 0;
    });

    return datasetData
  }

  const getChartColor = (scoreAvg: number, addOpacity?: boolean): string => {
    const color = colorGradient[scoreAvg === 0 ? scoreAvg : scoreAvg - 1];
    if (addOpacity) {
      return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.2)`;
    }

    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`;
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },

    },
    scales: {
      r: {
        color: 'white',
        angleLines: {
          display: false
        },
        suggestedMin: 1,
        suggestedMax: 6,
        grid: {
          color: 'black'
        },
        ticks: {
          display: false,
          maxTicksLimit: 7
        },
        pointLabels: {
          color: 'white',
          fontWeight: 'bold'
        }
      }
    }
  };

  return (
    <div className='d-flex'>
      {chartData && <Radar data={chartData} options={options} />}
    </div>
  )
}

export default Chart