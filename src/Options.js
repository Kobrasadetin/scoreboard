import React from 'react'
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom"
import useReactRouter from 'use-react-router'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Slider from '@material-ui/core/Slider';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Description from '@material-ui/icons/Description';
import Image from '@material-ui/icons/Image';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles'
import CsvImport from './CsvImport'
import DefaultCss from './Defaultcss'
import RenderViewer from './RenderViewer'

const DefaultOptions = {
    pageSize: 20,
    title: "s20 trellet gt series",
    subtitle: "pistetilanne",
}

const useStyles = makeStyles(theme => {
    return ({
        paper: {
        },
        margin: {
            height: theme.spacing(3),
        },
        optionsTitle: {
            margin: "0px",
            padding: "10px",
            textAlign: "center"
        }
    })
})


const OptionsMenu = ({ options, setOptions, importCsv }) => {
    const classes = useStyles()
    const toggleImport = () => {
        importCsv(true)
    }
    const setOption = (name, newVal) => {
        const newOptions = { ...options, [name]: newVal }
        setOptions(newOptions)
        console.log("new options", JSON.stringify(newOptions))
    }
    return <Paper className={classes.paper}>
        <Container><h4 className={classes.optionsTitle}>Options</h4>
            <div className={classes.margin} />
            <MenuItem onClick={toggleImport} >
                <ListItemIcon>
                    <Description />
                </ListItemIcon>
                <ListItemText primary="Import CSV" />
            </MenuItem>
            <MenuItem >
                <ListItemIcon>
                    <Image />
                </ListItemIcon>
                <Link component={RouterLink}
                    noWrap
                    variant="body2"
                    to="/canvas"
                ><ListItemText primary="View as image" />
                </Link>
            </MenuItem>
            <div className={classes.margin} />
            <Typography id="discrete-slider-always" gutterBottom>
                Names per page
            </Typography>
            <Slider
                defaultValue={20}
                aria-labelledby="discrete-slider-always"
                step={1}
                valueLabelDisplay="on"
                onChangeCommitted={
                    (e, val) => setOption("pageSize", val)
                }
            />
        </Container>
    </Paper>
}

export { DefaultOptions, OptionsMenu }