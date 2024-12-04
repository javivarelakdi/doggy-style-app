// App.tsx
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import theme from "@/styles/theme";
import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";
import dog1 from "@/assets/images/dog1.png";
import dog2 from "@/assets/images/dog2.png";
import dog3 from "@/assets/images/dog3.png";
import dog4 from "@/assets/images/dog4.png";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

const HeaderContainer = styled("header")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#f0f0f0",
  zIndex: 1000,
});

const FooterContainer = styled("footer")({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#f0f0f0",
  zIndex: 1000,
});

const MainContent = styled("main")({
  paddingTop: "7rem",
  paddingBottom: "3rem",
});

function App() {
  const [value, setValue] = React.useState(0);
  const users = [
    { name: "User 1", img: dog1 },
    { name: "User 2", img: dog2 },
    { name: "User 3", img: dog3 },
    { name: "User 4", img: dog4 },
    { name: "User 5", img: dog1 },
    { name: "User 6", img: dog2 },
    { name: "User 7", img: dog3 },
    { name: "User 8", img: dog4 },
    { name: "User 9", img: dog1 },
    { name: "User 10", img: dog2 },
    { name: "User 11", img: dog3 },
    { name: "User 12", img: dog4 },
    { name: "User 13", img: dog1 },
    { name: "User 14", img: dog2 },
    { name: "User 15", img: dog3 },
    { name: "User 16", img: dog4 },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <HeaderContainer>
        <h1>Doggy Style</h1>
        <Avatar alt="Avatar" src={dog1} />
      </HeaderContainer>
      <MainContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {users.map((user, index) => (
            <Grid size={4} key={index}>
              <img
                src={user.img}
                alt={user.name}
                loading="lazy"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Grid>
          ))}
        </Grid>
      </MainContent>
      <FooterContainer>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </FooterContainer>
    </ThemeProvider>
  );
}

export default App;
