import { ApolloClient, useApolloClient } from "@apollo/client";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface CustomSearchInputProps {
  onSearch: (data: string[]) => void;
  getSearchByString: (client: ApolloClient<Object>, searchString: string ) => Promise<string[]>;
}

const CustomSearchInput = ({ onSearch, getSearchByString}: CustomSearchInputProps) => {
  const client = useApolloClient();
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    getSearchByString(client, searchString)
      .then((idsArray: string[]) => {
        console.log(idsArray);
        onSearch(idsArray);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchString]);

  return (
    <>
      <TextField
        id="custom-search-input"
        label="Search"
        placeholder="Search..."
        variant="filled"
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
    </>
  );
};

export default CustomSearchInput;
