import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const LanguageCard = (props) => {
  const { id, name } = props.language;
  return (
    <Link to={`/languages/${id}`}>
      <Card sx={{ maxWidth: 345, mb: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img-b.udemycdn.com/course/240x135/851712_fc61_6.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default LanguageCard;
