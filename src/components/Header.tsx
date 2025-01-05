import { Avatar, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dog1 from "@/assets/images/dog1.png";
import {
  Logout,
  Favorite,
  ChatBubble,
  GridView,
  Pets,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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

interface HeaderProps {
  setError: (error: string | null) => void; // Type for setError
}

export function Header({ setError }: HeaderProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      setError("Failed to logout");
    }
  };
  return (
    <HeaderContainer>
      <h1>Doggy Style</h1>
      <Grid container>
        <IconButton color="primary" aria-label="chat">
          <GridView />
        </IconButton>
        <IconButton color="primary" aria-label="chat">
          <ChatBubble />
        </IconButton>
        <IconButton color="primary" aria-label="favorites">
          <Favorite />
        </IconButton>
        <IconButton color="primary" aria-label="favorites">
          <Pets />
        </IconButton>
        <IconButton color="primary" onClick={handleLogout} aria-label="logout">
          <Logout />
        </IconButton>
        <Avatar alt="Avatar" src={dog1} />
      </Grid>
    </HeaderContainer>
  );
}
