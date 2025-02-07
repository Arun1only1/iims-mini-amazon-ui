import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
const ProductDetail = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1rem",
        gap: "3rem",
        margin: "3rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <Box>
        <img
          src="https://cdn.thewirecutter.com/wp-content/media/2023/04/tv-buying-guide-2048px-0032.jpg?auto=webp&quality=75&width=1024"
          alt="TV"
          height={"500px"}
        />
      </Box>

      <Stack
        sx={{
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5">TV</Typography>
        <Chip label="Samsung" variant="contained" color="warning" />

        <Typography variant="h6">Price:$800</Typography>
        <Typography variant="h6">Available Quantity:10</Typography>

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h6">Category:</Typography>
          <Chip label="Electronics" variant="contained" color="warning" />
        </Box>

        <Typography
          sx={{
            textAlign: "justify",
            lineHeight: "1.5rem",
            fontSize: "1.2rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          cumque quos sapiente ab possimus debitis id, perspiciatis molestiae
          similique explicabo ipsa eius dolorem nihil animi quam dolores
          inventore consequatur illo eum aliquam placeat aperiam adipisci sed.
          Perspiciatis praesentium harum esse, quis illo voluptatum consequuntur
          labore ex, hic nulla veritatis ab quasi eaque, iure laboriosam
          recusandae dicta iste sed! Impedit a architecto dignissimos ab
          repellendus officiis possimus? Ut, praesentium aperiam fugiat
          inventore impedit enim, molestiae reprehenderit odit amet mollitia
          consequatur dolores dolorem facere! Esse, repellendus explicabo.
          Aspernatur recusandae ipsa temporibus a vel ut facilis, corporis
          nostrum illo mollitia possimus repellat beatae.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Button variant="contained" color="success" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteOutlineIcon />}
          >
            Delete
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductDetail;
