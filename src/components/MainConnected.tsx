import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, TextField } from "@mui/material";

export type MainConnectedType = {
  type: string;
  handleOpen?: () => void;
};

export default function MainConnected({ type, handleOpen }: MainConnectedType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="static/solona_visa.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Solana Credit Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Create a credit card with instant time
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Create New Card
        </Button>
      </CardActions>
    </Card>
  );
}
