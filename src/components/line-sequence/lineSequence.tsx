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
import { messageProps } from "../mainComponent";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const tempData = (data: messageProps[]) => {
  const tempData: number[] = [];
  data.forEach((element) => tempData.push(element.data.temperatura));
  let index = 0;
  const labels: string[] = [];
  data.forEach((element) => labels.push(new Date(element.messageReadDate).toLocaleTimeString()));
  return {
    labels,
    datasets: [
      {
        label: "Temperatura",
        data: labels.map(() => {
          const response = tempData[index]
          index = index + 1;
          return response;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
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

const humData = (data: messageProps[]) => {
  const humData: number[] = [];
  data.forEach((element) => humData.push(element.data.umidade));
  let index = 0;

  const labels: string[] = [];
  data.forEach((element) => labels.push(new Date(element.messageReadDate).toLocaleTimeString()));
  return {
    labels,
    datasets: [
      {
        label: "Umidade",
        data: labels.map(() => {
          const response = humData[index]
          index = index + 1;
          return response;
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
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

const rainData = (data: messageProps[]) => {
  const rainData: number[] = [];
  data.forEach((element) => rainData.push(element.data.chuvaAcumulada));
  let index = 0;
  const labels: string[] = [];
  data.forEach((element) => labels.push(new Date(element.messageReadDate).toLocaleTimeString()));
  return {
    labels,
    datasets: [
      {
        label: "Pluviosidade",
        data: labels.map(() => {
          const response = rainData[index]
          index = index + 1;
          return response;
        }),
        borderColor: "rgb(46, 204, 113)",
        backgroundColor: "rgba(46, 204, 113, 0.5)",
      },
    ],
  };
};

const LineSequence: React.FC<{ items: messageProps[] }> = ({ items }) => {
  return (
    <div>
      <Line options={tempOptions} data={tempData(items)} />
      <Line options={humOptions} data={humData(items)} />
      <Line options={rainOptions} data={rainData(items)} />
    </div>
  );
};

export default LineSequence;
