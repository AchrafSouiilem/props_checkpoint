import React from "react";
import Card from "react-bootstrap/Card";
import unknown from "./unknown.png"

const Player = ({ playerDetails }) => {
  let { name, team, nationality, jerseyNumber, age, imageUrl } = playerDetails;
  let styleimage = {height: "18rem", objetFit: "cover"}
  return (
    <div className="card_body">
      <Card className="player_card">
        <Card.Img variant="top" style={styleimage} src={imageUrl} />
        <Card.Body>
          <Card.Title style={{color: "#FFC000", textAlign: "center"}}>{name}</Card.Title>
          <Card.Text className="design">
            <div><span>Team:</span> {team}</div>
            <div><span>Nationality:</span> {nationality}</div>
            <div><span>Jersey number:</span> {jerseyNumber}</div>
            <div><span>Age:</span> {age}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

Player.defaultProps = {
  playerDetails: {
    name: "Unkown",
    team: "Unkown",
    nationality: "Unkown",
    jerseyNumber:"Unkown",
    age: "Unkown",
    imageUrl: unknown
  }
};

export default Player;
