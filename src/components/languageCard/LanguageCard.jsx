import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const LanguageCard = (props) => {
  const { id, name, imageUrl } = props.language;
  return (
    <Link to={`/languages/${id}`}>
      <Card sx={{ maxWidth: 345, mb: 5 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={imageUrl} alt="" />
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
