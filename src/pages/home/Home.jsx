import React, { useState, useEffect } from "react";
import Voiture from "../../components/Voiture";
import axios from "./../../axios";
export default function Home() {
  const [voiture, setVoiture] = useState(null);
  const access = false;
  useEffect(() => {
    axios
      .get(`api/voitPubl`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setVoiture(response.data);
      });
  }, []);
  console.log(voiture);
  return (
    <div>
      {voiture ? (
        <div>
          {voiture.map((el) => {
            return (
              <Voiture
                key={el.id}
                mark={el.mark}
                detail={el.detail}
                access={access}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
