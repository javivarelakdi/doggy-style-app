// App.tsx
import { useState, useEffect } from "react";
import { User } from "./types/user";
import { userService } from "./services/userService";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import theme from "@/styles/theme";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid2";
import dog1 from "@/assets/images/dog1.png";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import {
  CircularProgress,
  Alert,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

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
  const [value, setValue] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Barcelona coordinates
        const data = await userService.getUsers({
          lng: 2.154007,
          lat: 41.390205,
        });
        console.log("Fetched data:", data); // Debug log
        setUsers(data);
      } catch (err) {
        console.error("Error:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
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
                src={dog1}
                alt={user.username}
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
