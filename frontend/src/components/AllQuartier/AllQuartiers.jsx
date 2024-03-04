import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllQuartier.css";
import { Link } from "react-router-dom";
import TemplateWindows from "../TemplateWindows/TemplateWindows";
import BtnmoreInfos from "./BtnmoreInfos";

function AllQuartiers() {
  const [numberArt, setNumberArt] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/art/quartier`)
      .then((res) => setNumberArt(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <TemplateWindows title="Quartiers" myClass="falsebtnprevious">
      <div className="quartierContainer">
        {numberArt.map((number) => (
          <Link to={`./${number.id}`} state="quartier">
            <div className="liquartiers" key={number.quartier_name}>
              <p>
                <h2 className="spanquartier">{number.quartier_name} </h2>
                {number.total} oeuvres présentes
              </p>
              <div className="moreinfo moreinfoQuartier">
                <BtnmoreInfos />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </TemplateWindows>
  );
}

export default AllQuartiers;
