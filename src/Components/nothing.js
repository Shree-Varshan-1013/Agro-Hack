import React from "react";
import { Link } from "react-router-dom";
import "../Styles/nothing.css";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";

const Nothing = () => {
  return (
    <Container className="baseNothing" maxwidth={false} maxHeight={false}>
      <div className="blocky">
        <h1 style={{ fontSize: 50, marginTop: 390 }}>
          Nothing here...
          <br />
          Add some items..
        </h1>
      </div>
      <div className="explore">
        <Link to="/consumer">
          <Button variant="outlined">Explore</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Nothing;