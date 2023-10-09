import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  new Date().toLocaleTimeString(),
  new Date().toLocaleTimeString(),
  new Date().toLocaleTimeString(),
  new Date().toLocaleTimeString(),
  new Date().toLocaleTimeString(),
];

const tempOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "DADOS DE TEMPERATURA (°C)",
    },
  },
};

const tempData = {
  labels,
  datasets: [
    {
      label: "Temperatura",
      data: labels.map(() =>
        parseInt((Math.random() * (30 - 70) + 70) as unknown as string)
      ),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const humOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "DADOS DE UMIDADE (%)",
    },
  },
};

const humData = {
  labels,
  datasets: [
    {
      label: "Umidade",
      data: labels.map(() =>
        parseInt((Math.random() * 100) as unknown as string)
      ),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const rainOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "DADOS DE PLUVIOSIDADE (mm)",
    },
  },
};

const rainData = {
  labels,
  datasets: [
    {
      label: "Pluviosidade",
      data: labels.map(() =>
        parseInt(
          (Math.random() * (250000 - 300000) + 300000) as unknown as string
        )
      ),
      borderColor: "rgb(46, 204, 113)",
      backgroundColor: "rgba(46, 204, 113, 0.5)",
    },
  ],
};

function LineSequence() {
  return (
    <div>
      <Line options={tempOptions} data={tempData} />
      <Line options={humOptions} data={humData} />
      <Line options={rainOptions} data={rainData} />
    </div>
  );
}

export default LineSequence;
