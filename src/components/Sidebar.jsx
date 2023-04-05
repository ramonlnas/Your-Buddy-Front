import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";
import image from "../assets/images/download.jpeg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Header>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}

        <InsideHeader>
          <span>Location</span>
          <IonHeader>
            <ion-icon name="location-sharp"></ion-icon>
            <h1>
              <strong>Rio</strong>, Brazil
            </h1>
          </IonHeader>
        </InsideHeader>
        <img src={image} alt="Paisagem" />
      </Header>
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 414px;
  height: 13vh;
  padding: 30px 20px 0px 20px;
  margin-bottom: 20px;

  color: #ffffff;

  img {
    width: 50px;
    height: 50px;
    border-radius: 33px;
    margin-left: 50px;
  }

  ion-icon {
    width: 33px;
    height: 33px;
    color: #979797;
  }
`;

const InsideHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    color: #e2e2e2;
    font-size: 26px;
    margin-left: 55px;
  }

  h1 {
    color: #ababab;
    font-size: 36px;
  }
`;
const IonHeader = styled.div`
  display: flex;

  ion-icon {
    color: #346161;
    width: 30px;
    margin-right: 10px;
  }
`;
