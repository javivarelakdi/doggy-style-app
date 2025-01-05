import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userService } from "@/services/userService";
import { User } from "@/types/user";
import { Header } from "@/components/Header";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid2";
import {
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, ChatBubble, Pets, ArrowBack } from "@mui/icons-material";

const DogProfilePage: React.FC = () => {
  const { id } = useParams(); // Get the dog ID from the URL parameters
  const [dog, setDog] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDog = async () => {
      if (!id) {
        setError("Dog ID is required");
        setLoading(false);
        return;
      }
      try {
        const data = await userService.getUserById(id);
        setDog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch dog");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDog();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!dog) return <p>Dog not found</p>;

  const MainContent = styled("main")({
    paddingTop: "9rem",
    paddingBottom: "3rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  });

  const ButtonsContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
  });

  const TopContainer = styled("div")({
    display: "flex",
    justifyContent: "start",
  });

  const calculateAge = (birthdate: Date | undefined): number | string => {
    if (!birthdate) return "N/A"; // Handle undefined birthdate
    const today = new Date();
    let age = today.getFullYear() - new Date(birthdate).getFullYear();
    const monthDiff = today.getMonth() - new Date(birthdate).getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < new Date(birthdate).getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <>
      <Header setError={setError} />
      <MainContent>
        <TopContainer>
          <IconButton color="primary" aria-label="chat">
            <ArrowBack />
          </IconButton>
          <Typography variant="h3" color="text.primary">
            {dog.username}
          </Typography>
        </TopContainer>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={dog.imgUrl || "/path/to/placeholder.jpg"} // Provide a default image
                alt={dog.username || "Dog"}
              />
              <CardContent>
                <ButtonsContainer>
                  <IconButton color="primary" aria-label="chat">
                    <ChatBubble />
                  </IconButton>
                  <IconButton color="primary" aria-label="favorites">
                    <Favorite />
                  </IconButton>
                  <IconButton color="primary" aria-label="favorites">
                    <Pets />
                  </IconButton>
                </ButtonsContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={6}>
            <Typography variant="body1" color="text.primary">
              Breed: {dog.breed || "N/A"}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Age: {calculateAge(dog.birth)} years
            </Typography>
            <Typography variant="body1" color="text.primary">
              About: {dog.about || "N/A"}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Distance: {dog.distance?.toFixed(2)} meters
            </Typography>
          </Grid>
        </Grid>
      </MainContent>
    </>
  );
};

export default DogProfilePage;
