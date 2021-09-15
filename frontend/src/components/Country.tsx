import React from "react";

interface CountryProps {
  id: string;
  name: string;
  code: string;
}

const Country = (props: CountryProps): JSX.Element => {
  const { id, name, code } = props;
  return <span>{`${id} ${name} ${code}`}</span>;
};

export default Country;
