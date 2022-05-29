import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { useShowBalance } from "../hooks/useShowBalance";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { CreditCardResponseType } from "../views/home";

export const ShowBalance = styled.div``;

export default function SolanaCard({
  balance,
  creditCardValue,
  className,
  setType,
}: {
  balance: number;
  creditCardValue: CreditCardResponseType;
  className?: string;
  setType: (item: string) => void;
}) {
  const { showBalance, toggleBalanceVisibility } = useShowBalance();

  return (
    <div className={className}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="static/solana_card.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Solana Card
            </Typography>
            <div className="flex justify-start items-center w-full">
              <div className="flex justify-start items-center w-full">
                <div className="flex justify-start items-center">
                  <Typography
                    className="mr-2"
                    variant="body2"
                    color="text.secondary"
                  >
                    Balance:
                  </Typography>
                  <TextField
                    type={showBalance ? "text" : "password"}
                    value={`${balance} SOL`}
                    variant="standard"
                    className="w-24"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </div>
                <ShowBalance
                  className="cursor-pointer ml-2"
                  onClick={toggleBalanceVisibility}
                >
                  {showBalance ? (
                    <VisibilityOffIcon fontSize="medium" color="primary" />
                  ) : (
                    <VisibilityIcon fontSize="medium" color="primary" />
                  )}
                </ShowBalance>
              </div>
            </div>
            <div className="flex justify-start mt-4">
              {creditCardValue ? (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setType("buymore");
                  }}
                >
                  Buy More Fiat
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setType("createcard");
                  }}
                >
                  Create Credit Card
                </Button>
              )}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
