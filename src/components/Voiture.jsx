import React, { useState } from "react";
import "./voiture.css";
import TextareaAutosize from "react-textarea-autosize";
import { AiOutlineSend } from "react-icons/ai";

export default function Voiture() {
  const [comments, setComments] = useState(false);

  console.log(comments);
  return (
    <div className="d-flex  justify-content-center mt-4">
      <div className=" container--perso row d-flex justify-content-center align-items-center rounded ">
        <div className=" col-4 col-md-2 p-1">
          <div className="image--container d-flex justify-content-center align-items-center ">
            <img
              src="https://lessentiel.macif.fr/sites/default/files/2019-03/francais-voiture.jpg"
              className="image--perso "
            />
          </div>
        </div>
        <div className="litle--container col-4 d-flex justify-content-start align-items-center">
          <div>
            <span className="row text1 bold"> voiture Num 1 </span>

            <span className="row text2"> vous pouver</span>
          </div>
        </div>
        <div className="litle--container col-4 d-flex justify-content-end align-items-center">
          <lord-icon
            src="https://cdn.lordicon.com/nocovwne.json"
            trigger="click"
            colors="primary:#0466c8,secondary:#0466c8"
            style={{ width: "50px", height: "150px" }}
            onClick={() => {
              setComments(!comments);
            }}
          ></lord-icon>
        </div>
        {comments ? (
          <div>
            <div className=" container--perso row   border  container--message ">
              <div className="m-2 bp-2 w-100 d-flex justify-content-center  ">
                <div className="container--messageme m-2 row ">
                  {" "}
                  <p>
                    ip link showip link showip link showip link showip link
                    showip link showip link showip link showip link showip link
                    showip link showip link showip link showip link showip link
                    showip link showip link show
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="container--perso row   border ">
              <div className="  p-2 w-100 d-flex justify-content-start  ">
                <form className=" m-1 row message--enter">
                  <div className=" col-10 d-flex justify-content-end align-items-center">
                    <TextareaAutosize className=" pt-2 pl-2 pb-1" />
                  </div>
                  <div className=" col-2 d-flex justify-content-end align-items-center">
                    <AiOutlineSend className="text-primary  " />
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
