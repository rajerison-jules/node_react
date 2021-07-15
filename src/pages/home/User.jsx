import React, { useState, useEffect } from "react";
import Voiture from "../../components/Voiture";
import axios from "./../../axios";
import "./user.css";
export default function Home() {
  const [voiture, setVoiture] = useState();
  const access = true;
  useEffect(() => {
    axios
      .get(`/api/voitures`, {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2MzQxMDA5LCJleHAiOjE2MjY0Mjc0MDl9.jjzMYi3jFzCJm-ilpoV7a0rBzCDwiRRIHEbRP6dh3qo",
        },
      })
      .then((response) => {
        setVoiture(response.data);
      });
  }, [voiture]);
  console.log(voiture);
  return (
    <div className="user--page">
      {voiture ? (
        <div>
          {voiture.map((el) => {
            return (
              <Voiture
                key={el.id}
                mark={el.mark}
                detail={el.detail}
                access={access}
                comment={el.comments}
                id={el.id}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
