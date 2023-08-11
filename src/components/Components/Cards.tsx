import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
      sx={{
        borderRadius: 8,
        width: "45rem",
        marginRight: "18rem",
        zIndex: 1,
        paddingTop: "2rem",
        paddingBottom: "2rem",
        paddingLeft: "2rem",
      }}
    >
      <CardContent>
        <Typography
          variant="h1"
          component="h5"
          fontFamily="Montserrat"
          fontSize="3.5rem"
          fontWeight="bold"
        >
          We are committed to driving breakthrough results as a leader in
          diversity, equity
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            padding: "1rem 2.5rem",
            background: "#bdb285",
            letterSpacing: "0.125rem",
            borderRadius: 10,
            fontSize: "16px",
            ":hover": {
              background: "#5A6959",
            },
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
