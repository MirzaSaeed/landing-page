import React from "react";
import { Box, Container, Avatar } from "@mui/material";
import Cards from "../Components/Cards";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <Box
      sx={{ background: "#29332C", position: "relative", overflow: "hidden" }}
    >
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          sx={{ marginBottom: "6rem" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 100 }}
            transition={{
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Avatar
              sx={{
                width: "60%",
                height: "auto",
                borderRadius: "50%",
                marginLeft: "-20%",
                margin: "8rem 4rem -13rem 20rem",
              }}
              src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=996&t=st=1690551998~exp=1690552598~hmac=530a4ea732f092aa8d8d37d4c8859d0142796cbf4ae9f7a908df891d5aa4d27b"
              alt="person"
            />
          </motion.div>
          <Cards />
        </Box>
      </Container>
    </Box>
  );
};

export default FirstSection;
