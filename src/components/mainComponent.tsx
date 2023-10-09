import React, { useEffect, useState } from "react";
import LeadForm from "./lead-form/leadForm";
import LineSequence from "./line-sequence/lineSequence";
import ContadorDeGotas from "./rainfall/rainfall";

export interface messageProps {
  messageReadDate: string;
  data: {
    temperatura: number;
    umidade: number;
    chuvaAcumulada: number;
    chuvaInstantanea: number;
  };
}

function MainComponent() {
  const [message, setMessage] = useState<messageProps[]>([]);
  const apiUrl = "https://device-reader-core-741352d6875c.herokuapp.com/message";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados da API");
        }
        const jsonData = await response.json();
        console.debug(jsonData)
        setMessage(
          jsonData.map((element: any) => ({
            messageReadDate: element.messageReadDate,
            data: {
              temperatura: element.data.temperatura,
              umidade: element.data.umidade,
              chuvaAcumulada: element.data.chuvaAcumulada,
              chuvaInstantanea: element.data.chuvaInstantanea,
            },
          }))
        );
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <LineSequence items={message} />
      </div>
      <div>
        <ContadorDeGotas
          numero={message[message.length -1]?.data?.chuvaInstantanea! }
        />
      </div>
      <div>
        <LeadForm link="https://forms.gle/3nyzkx2xtmK9WqZ69" />
      </div>
    </div>
  );
}

export default MainComponent;
