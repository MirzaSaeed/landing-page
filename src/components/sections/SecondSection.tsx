import React from "react";
import {
  Box,
  Card,
  CardActions,
  Grid,
  CardContent,
  Container,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BackgroundImage = styled(Box)(({ theme }) => ({
  minHeight: "420px",
  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("//images01.nicepage.com/c461c07a441a5d220e8feb1a/937069da22f6547d8998bbd1/sdsdsd-min.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

const SecondSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <motion.div
      variants={container}
      initial={{ opacity: 0, y: 26.25 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26.25 }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <motion.div variants={item} initial="hidden" animate="show">
        <BackgroundImage>
          <Box textAlign="center" color="white" maxWidth="70%">
            <motion.div
              variants={item}
              initial={{ opacity: 0, y: 300 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h2"
                component="h2"
                fontWeight="bold"
                gutterBottom
              >
                Key Features
              </Typography>
            </motion.div>
            <motion.div
              variants={item}
              initial={{ opacity: 0, y: 300 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="body1" fontStyle="italic" gutterBottom>
                Sample text. Click the text box. Click again or double click to
                start editing the text.
              </Typography>
            </motion.div>{" "}
          </Box>
        </BackgroundImage>
      </motion.div>
      <Container>
        <motion.div
          variants={item}
          initial={{ opacity: 0, y: 200 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={2} sx={{ marginTop: "-4rem" }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "2rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  color: "#fff",

                  textAlign: "center",
                  background: "#4F6054",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    component={"h4"}
                    textTransform={"uppercase"}
                    fontFamily={"Raleway"}
                    fontWeight={"700"}
                    letterSpacing={"3px"}
                    fontSize={"1.5rem"}
                  >
                    Pricing
                  </Typography>
                  <Typography fontFamily={"Raleway"} pt={2}>
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      letterSpacing: "0.125rem",
                      borderRadius: 10,
                      fontSize: "16px",
                      color: "#fff",
                      ":hover": {
                        color: "#BDB285",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "2rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  color: "#fff",
                  textAlign: "center",
                  background: "#BDB285",
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      width: "60%",
                      height: "auto",
                    }}
                    src="../../assets/Icons/strategy.png"
                    alt="Strategy"
                  />
                  <Typography
                    variant="h4"
                    component={"h4"}
                    textTransform={"uppercase"}
                    fontFamily={"Raleway"}
                    fontWeight={"700"}
                    letterSpacing={"3px"}
                    fontSize={"1.5rem"}
                  >
                    Strategy
                  </Typography>
                  <Typography fontFamily={"Raleway"} pt={2}>
                    {" "}
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      letterSpacing: "0.125rem",
                      borderRadius: 10,
                      fontSize: "16px",
                      color: "#fff",
                      ":hover": {
                        color: "#4F6054",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "2rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  color: "#fff",

                  textAlign: "center",
                  background: "#4F6054",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    component={"h4"}
                    textTransform={"uppercase"}
                    fontFamily={"Raleway"}
                    fontWeight={"700"}
                    letterSpacing={"3px"}
                    fontSize={"1.5rem"}
                  >
                    Effective
                  </Typography>
                  <Typography fontFamily={"Raleway"} pt={2}>
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      letterSpacing: "0.125rem",
                      borderRadius: 10,
                      fontSize: "16px",
                      color: "#fff",
                      ":hover": {
                        color: "#BDB285",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "2rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  color: "#fff",
                  textAlign: "center",
                  background: "#BDB285",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    component={"h4"}
                    textTransform={"uppercase"}
                    fontFamily={"Raleway"}
                    fontWeight={"700"}
                    letterSpacing={"3px"}
                    fontSize={"1.5rem"}
                  >
                    Support
                  </Typography>
                  <Typography fontFamily={"Raleway"} pt={2}>
                    {" "}
                    Sample text. Click to select the text box. Click again or
                    double click to start editing the text.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      letterSpacing: "0.125rem",
                      borderRadius: 10,
                      fontSize: "16px",
                      color: "#fff",
                      ":hover": {
                        color: "#4F6054",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default SecondSection;
