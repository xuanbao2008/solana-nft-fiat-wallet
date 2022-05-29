import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ShowBalance } from "./SolanaCard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useShowBalance } from "../hooks/useShowBalance";
import { CreditCardResponseType } from "../views/home";

export default function CustomCreditCard({
  creditCardValue,
}: {
  creditCardValue: CreditCardResponseType;
}) {
  const { showBalance, toggleBalanceVisibility } = useShowBalance();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="static/solona_visa.png"
          alt="green iguana"
        />
        {creditCardValue ? (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Credit Card
            </Typography>
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
                  value="1,000 USD"
                  // value={`${creditCardValue.balance} USD`}
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
            <Typography
              className="text-left"
              variant="body2"
              color="text.secondary"
            >
              {/* Exp Date: {creditCardValue.expired_date} */}
              Exp Date: '20/11/2028'
            </Typography>
          </CardContent>
        ) : (
          <Typography
            className="text-center mt-16"
            gutterBottom
            variant="h5"
            component="div"
          >
            No data
          </Typography>
        )}
      </CardActionArea>
    </Card>
  );
}
