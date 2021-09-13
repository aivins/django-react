import React from "react";

const CountryFlag = ({ code, variant = "shiny", size = 32, ...props }) => (
  <img
    {...props}
    src={`https://www.countryflags.io/${code.toLowerCase()}/${variant}/${size}.png`}
  ></img>
);

export default CountryFlag;
