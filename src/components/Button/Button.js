import React from "react";
import { Button } from "@mui/material";
import "./Button.css";

function CustomButton({ icon, text }) {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn-text">{text}</span>
    </Button>
  );
}

export default CustomButton;
