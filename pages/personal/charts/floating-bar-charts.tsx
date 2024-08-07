import { useEffect, useState } from 'react'

import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

import styles from 'components/dashboard/Dashboard.module.scss'

import annotationPlugin from 'chartjs-plugin-annotation'

Chart.register(...registerables)
Chart.register(annotationPlugin)

const FloatingBarChart = ({ dataSources, config }) => {
  if (!dataSources) return <div></div>

  const [data, setData] = useState(null)
  const [scales, setScales] = useState(null)

  useEffect(() => {
    setData({
      labels: [...dataSources.map(d => `${d.source}      `)],
      datasets: [
        {
          indexAxis: 'y',
          label: ` ${config.units} `,
          data: dataSources.map(d => d.values),
          backgroundColor: config.colours,
          minBarLength: 1,
        },
      ],
    })

    setScales({
      x: {
        type: 'linear',
        min: 1995,
        max: 2024,
        ticks: {
          callback: value => {
            return `${value}`
          },
        },
      },
    })
  }, [dataSources])

  const options = { scales, responsive: true }

  return (
    <>
      {data === null ? (
        <div>
          There is either no data, or you have disabled JavaScript which is necessary to view charts on this site.
        </div>
      ) : (
        <div>
          <div className={styles.skills}>
            <Bar data={data} options={options}>
              <div>Hello Fallback World</div>
            </Bar>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingBarChart
