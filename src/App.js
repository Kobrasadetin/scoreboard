import React from 'react'
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom"
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import RenderResult from './RenderResult'

import { makeStyles } from '@material-ui/core/styles'
import CsvImport from './CsvImport'
import DefaultCss from './Defaultcss'

import Menu from './Menu'

const useStyles = makeStyles(theme => {
  return ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  })
})

function App() {
  const classes = useStyles();
  const [showImport, setShowImport] = React.useState(false);
  const toggleImport = (setVal) => {
    const newVal = setVal === undefined ? !showImport : setVal
    setShowImport(newVal);
  }

  const [csv, setCsv] = React.useState(
    localStorage.getItem('myCsv') || ''
  );
  React.useEffect(() => {
    localStorage.setItem('myCsv', csv);
  }, [csv]);

  const [css, setCss] = React.useState(
    localStorage.getItem('myCss') || ''
  );
  React.useEffect(() => {
    localStorage.setItem('myCss', css);
  }, [css]);

  return (
    <React.Fragment>
      {showImport && <CsvImport setVisible={setShowImport} setCsv={setCsv}></CsvImport>}
      <Toolbar className={classes.toolbar}>
        <Menu importCsv={toggleImport}></Menu>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Scoreboard from CSV
          </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <RenderResult csv={csv} css={DefaultCss} title="s20 trellet gt series" subtitle="pistetilanne"></RenderResult>
    </React.Fragment>
  );
}

export default App;
