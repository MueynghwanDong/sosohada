import React from 'react';
import clsx from 'clsx'
import { AppBar, Button, Toolbar, Typography, Drawer,  List, Divider, IconButton, ListItem, ListItemIcon, ListItemText, makeStyles, useTheme, } from '@material-ui/core'
// import Responsive from './Responsive';
import { ScheduleSharp, Mail, Inbox, ChevronRight, ChevronLeft, Menu, Pets, HelpOutline, Assignment } from '@material-ui/icons'
import { blue } from '@material-ui/core/colors'
// import { MenuIcon, ChevronLeftIcon, ChevronRightIcon, InboxIcon, MailIcon } from '@material-ui/icons'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
          margin: 0,
          padding: 0,
        },
        li: {
          listStyle: 'none',
        },
      },
      root: {
        display: 'flex',

      },
      appBar:  {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      link: {
        margin: theme.spacing(1, 1.5),
      },
 

  }));
  
const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme()
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
    const new_url = window.location.pathname

    const IconList = [ <Pets/>, <HelpOutline/>, <ScheduleSharp/>, <Assignment/> ]
    // 'My Page', 'FAQ', 'Scheduler', 'posts'?

    return (
  
        <div className={classes.root}>
        
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            <Toolbar className={classes.toolbar}>
          { new_url ==="/login" || new_url === "/register" ?
            <></>:        
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
            </IconButton>
}
            
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Company name
                   
                </Typography>
                    {/* <nav>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            My Pages
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            hmmm
                        </Link>
                        {/* <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            hmmm2
                        </Link> */}
                    {/* </nav>  */}
                <Button href="#" color="white" variant="outlined" className={classes.link}>
                    LogOut
                </Button>
                {/* Login Logout은 조건에 따라 하나만 뜨도록 */}
                {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
                    Logout
                </Button> */}
            </Toolbar>
        </AppBar>
  <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={open}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
    </div>
    <Divider />
    <List>
      {['My Page', 'FAQ', 'Scheduler', 'posts'].map((text, index) => (
        <ListItem button key={text}>
          {/* <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon> */}
          <ListItemIcon>{IconList[index]}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    {/* <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List> */}
  </Drawer>  
  
    
  
  
      
      {/* <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
      >
      <div className={classes.drawerHeader} />


      </main> */}



        </div>
        
    )
}

export default Header;


