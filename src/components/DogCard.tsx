import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { User } from "@/types/user";

interface DogCardProps {
  user: User;
  onClick?: () => void;
}

const DogCard: React.FC<DogCardProps> = ({ user, onClick }) => {
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
    <Card onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={user.imgUrl || "/path/to/placeholder.jpg"} // Provide a default image
          alt={user.username || "Dog"} // Provide a default alt text
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.username || "Unknown"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Breed: {user.breed || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {calculateAge(user.birth)} years
          </Typography>
          <Typography variant="body2" color="text.secondary">
            About: {user.about || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Distance: {user.distance?.toFixed(2)} meters
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DogCard;
