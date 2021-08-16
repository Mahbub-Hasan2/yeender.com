import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import {useRouter} from "next/router"
import BookIcon from '@material-ui/icons/Book';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const SidebarData = [
    {
        id: 1,
        name: 'Header Content',
        link: '/dashboard/service',
        icon: <BrightnessAutoIcon />
    },
    {
        id: 2,
        name: 'dashboard',
        link: '/dashboard',
        icon: <DashboardIcon />
    },
    {
        id: 3,
        name: 'About',
        link: '/dashboard/about',
        icon: <InfoIcon />
    },
    {
        id: 4,
        name: 'Service',
        link: '/dashboard/service',
        icon: <WbIncandescentIcon />
    },
    {
        id: 5,
        name: 'Client review',
        link: '/dashboard/review',
        icon: <RateReviewIcon />
    },
    {
        id: 6,
        name: 'Projects',
        link: '/dashboard/projects',
        icon: <AssignmentIcon />
    },
    {
        id: 7,
        name: 'blogs',
        link: '/dashboard/blogs/blog',
        icon: <BookIcon />
    }
]

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const Sidebar = () => {
    const classes = useStyles();

    // const activeRouter = useRouter()
    // const isActive = (router) => {
    //     if(router == activeRouter.pathname){
    //         return "active"
    //     }
    //     else ""
    // }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >

            <List>

                <ListItem button
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                >
                    <img className="NavLogo img-fluid" src="https://i.imgur.com/tVK4H4p.png" alt="" />
                </ListItem>

            </List>
            <Divider />
            <List>
                {SidebarData.map((side, index) => (
                    <Link href={side.link} key={index}><ListItem button>
                        <ListItemIcon>{side.icon}</ListItemIcon>
                        <ListItemText primary={side.name} />
                    </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div>
           <div>
           {['left', 'right'].map((anchor, index) => (
                <React.Fragment key={index}>
                    <Button onClick={toggleDrawer(anchor, true)}><CalendarViewDayIcon /></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
           </div>
        </div>
    );
};

export default Sidebar;