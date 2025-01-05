import { useState, useEffect } from "react";
import { User } from "@/types/user";
import { userService } from "@/services/userService";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid2";
import { CircularProgress, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DogCard from "@/components/DogCard";
import { Header } from "@/components/Header";

const MainContent = styled("main")({
  paddingTop: "9rem",
  paddingBottom: "3rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
});

export function ListPage() {
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
        console.log("Fetched data:", data);
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
  const navigate = useNavigate();

  const handleClick = (user: User) => {
    navigate(`/dog/${user._id}`);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  return (
    <>
      <Header setError={setError} />
      <MainContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {users.map((user) => (
            <Grid size={4} key={user._id}>
              <DogCard user={user} onClick={() => handleClick(user)} />
            </Grid>
          ))}
        </Grid>
      </MainContent>
    </>
  );
}
