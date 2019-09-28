import React from 'react'
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom"
import useReactRouter from 'use-react-router'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Info from '@material-ui/icons/Info'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import RenderResult from './RenderResult'

import { makeStyles } from '@material-ui/core/styles'
import CsvImport from './CsvImport'
import DefaultCss from './Defaultcss'
import RenderViewer from './RenderViewer'
import './index.css'
import { DefaultOptions, OptionsMenu } from './Options'

import Menu from './Menu'

const useStyles = makeStyles(theme => {
  return ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: "#FFFFFF",
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
  const { history } = useReactRouter()

  const [showImport, setShowImport] = React.useState(false);
  const toggleImport = (setVal) => {
    const newVal = setVal === undefined ? !showImport : setVal
    setShowImport(newVal);
  }
  React.useEffect(() => {
    document.addEventListener("dragenter", toggleImport, true);
    document.addEventListener("dragleave", toggleImport, false);
  }, []);

  const [showMenu, setShowwMenu] = React.useState(
    false
  );

  const [options, setOptions] = React.useState(
    JSON.parse(localStorage.getItem('myOptions')) || DefaultOptions
  );
  React.useEffect(() => {
    localStorage.setItem('myOptions', JSON.stringify(options));
  }, [options]);

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
  React.useEffect(() => {
    return () => {
      if (history.action === "POP") // && history.location.pathname === "any specific path") {
        history.replace(history.location.pathname);
    }
  }, [history])

  const renderResult = <RenderResult
    csv={csv}
    css={DefaultCss}
    options={options}></RenderResult>

  console.log(JSON.stringify(options))
  return (
    <React.Fragment>
      <Route exact path="/">
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            onClick={() => setShowwMenu(!showMenu)}
          >
            <MenuIcon />
          </IconButton>
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
            <Info />
          </IconButton>
        </Toolbar>
        {showImport && <CsvImport setVisible={setShowImport} setCsv={setCsv}></CsvImport>}
        {showMenu && <OptionsMenu options={options} setOptions={setOptions} importCsv={setShowImport} />}
        {renderResult}
      </Route>
      <Route path="/canvas">
        <RenderViewer renderResult={renderResult} />
      </Route>
    </React.Fragment>
  );
}

export default App;
