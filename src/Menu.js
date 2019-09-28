import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Image from '@material-ui/icons/Image';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Description from '@material-ui/icons/Description';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom"

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function MenuComponent({ importCsv }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const toggleImport = () => {
        setAnchorEl(null)
        importCsv(true)
    }

    return (
        <div>
            <IconButton
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={toggleImport} >
                    <ListItemIcon>
                        <Description />
                    </ListItemIcon>
                    <ListItemText primary="Import CSV" />
                </StyledMenuItem>
                <StyledMenuItem >
                    <ListItemIcon>
                        <Image />
                    </ListItemIcon>
                    <Link component={RouterLink}
                        noWrap
                        variant="body2"
                        to="/canvas"
                    ><ListItemText primary="View as image" />
                    </Link>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}