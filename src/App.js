import React, { useState, useEffect } from "react";
import { AlertTitle } from '@material-ui/lab';
import Input from '@material-ui/core/Input';
import { FiUsers } from 'react-icons/fi';
import useStyles from "./AppStyle";
import Table from '@material-ui/core/Table';
import Card from '@material-ui/core/Card';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const users = [
  "Cia",
  "Alex",
  "Shahin",
  "Ayham",
  "Tomislav",
  "Kadir",
  "Vardges",
  "Maxim",
  "Sebastian",
  "Bea",
  "Sofia",
];

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = users.filter((person) =>
      person.toLowerCase().includes(search)
    );
    setSearchResults(results);
  }, [search]);
  const classes = useStyles()
  return (


    <>
      <AlertTitle
        className={classes.titleStyle}
      >
        <FiUsers />
        &nbsp;
        Benutzer
      <Input
          type="text"
          placeholder="Benutzer Suchen..."
          autoComplete="off"
          className={classes.inputStyle}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          value={search}
        />
      </AlertTitle>


      <Card
        className={classes.cardStyle}
      >
        <Table>
          {searchResults.map((item) => (
            <TableRow

            >
              <TableCell
                className={classes.cellStyle}
              >
                {item}
              </TableCell>
            </TableRow>
          ))}


        </Table>
      </Card>

    </>
  );
};

export default App;
