import React from "react";

interface CountryFlagProps {
  code: string;
  variant?: "flat" | "shiny";
  size?: number;
}

const CountryFlag = (props: CountryFlagProps): JSX.Element | null => {
  const { code, variant = "shiny", size = 32, ...rest } = props;
  return code ? (
    <img
      {...rest}
      src={`https://www.countryflags.io/${code.toLowerCase()}/${variant}/${size}.png`}
    ></img>
  ) : null;
};

export default CountryFlag;
