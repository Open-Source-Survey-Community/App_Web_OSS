import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import HelpIcon from '@material-ui/icons/Help';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BookIcon from '@material-ui/icons/Book';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';


class SideBarScrollComponent extends Component {
  render() {
    return (
      <div>
      <Link to={`/Dashboard/${correo}/${displayName}`}>
        <ListItem button>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText inset primary="MyDashBoard" />
        </ListItem>
      </Link>
      <Link to='/irPortalPreguntas'>
        <ListItem button>
        <ListItemIcon>
            <DescriptionIcon />
        </ListItemIcon>
        <ListItemText inset primary="Question Portal's" />
        </ListItem>
      </Link>
      <Link to='/irPortalEncuestas'>
        <ListItem button>
        <ListItemIcon>
            <ChromeReaderModeIcon />
        </ListItemIcon>
        <ListItemText inset primary="Survey Portal's" />
        </ListItem>
      </Link>
      <Link to='/crearNuevaPregunta'>
        <ListItem button>
        <ListItemIcon>
            <HelpIcon />
        </ListItemIcon>
        <ListItemText inset primary="New Question" />
        </ListItem>
      </Link>
      <Link to='/crearNuevaEncuesta'>
        <ListItem button>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText inset primary="New Survey" />
        </ListItem>
      </Link>
      <Link to={`/administrarMisPreguntas/${idUser}`}>
        <ListItem button>
        <ListItemIcon>
            <BookIcon />
        </ListItemIcon>
        <ListItemText inset primary="My Question's" />        
        </ListItem>
      </Link>
      <Link to={`/administrarMisEncuestas/${idUser}`}>
        <ListItem button>
        <ListItemIcon>
            <ReceiptIcon />
        </ListItemIcon>
        <ListItemText inset primary="My Surveys" />
        </ListItem>
      </Link>
      <Link to={`/administrarCorreccionesHechasPreguntas/${idUser}`}>
        <ListItem button>
        <ListItemIcon>
            <CreateIcon />
        </ListItemIcon>
        <ListItemText inset primary="Issue Question's" />
        </ListItem>
      </Link>
      <Link to={`/administrarCorreccionesHechasEncuestas/${idUser}`}>
        <ListItem button>
        <ListItemIcon>
            <VisibilityIcon />
        </ListItemIcon>
        <ListItemText inset primary="Issues Survey's" />
        </ListItem>
      </Link>
      </div>
    )
  }
}

export default SideBarScrollComponent
