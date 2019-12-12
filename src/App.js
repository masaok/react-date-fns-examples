import React from 'react';
import './App.css'

// import format from 'date-fns/format'

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {
  format,
  parse,
  isValid
} from 'date-fns';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {

  const classes = useStyles();

  let results = []

  let value, parsed, formatted

  value = '2019-12-10'
  parsed = parse(value, 'yyyy-MM-dd', new Date())
  formatted = format(parsed, 'yyyy-MM-dd')

  results.push({ value, parsed, formatted })

  value = ''
  parsed = parse(value, 'yyyy-MM-dd', new Date())
  formatted = isValid(parsed) ? format(parsed, 'yyyy-MM-dd') : ''
  // formatted = ''

  results.push({ value, parsed, formatted })

  return (
    <div className="App">
      <header className="App-header">
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>value</TableCell>
                <TableCell>string</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                results.map(result => {
                  return (
                    <TableRow key={result.value}>
                      <TableCell>{result.value}</TableCell>
                      <TableCell>{result.parsed.toString()}</TableCell>
                      <TableCell>{result.formatted}</TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </Paper>
        <table>
          <tr>
            <td>value</td>
            <td>formatted</td>
          </tr>
        </table>
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </header>
    </div>
  );
}

export default App;
