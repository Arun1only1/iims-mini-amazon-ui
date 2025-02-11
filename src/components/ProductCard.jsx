import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const ProductCard = (props) => {
  return (
    <Box
      sx={{
        width: 450,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      {/* Product Image */}
      <Box
        component="img"
        src="https://cdn.thewirecutter.com/wp-content/media/2023/04/tv-buying-guide-2048px-0032.jpg?auto=webp&quality=75&width=1024"
        alt="TV"
        sx={{ width: "100%", height: 300, objectFit: "cover" }}
      />

      {/* Product Details */}
      <Box
        sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" fontWeight={600}>
            {props.name}
          </Typography>
          <Chip
            color="warning"
            label={props.brand}
            variant="filled"
            sx={{ fontWeight: 500 }}
          />
        </Stack>

        <Typography variant="h5" fontWeight={700} color="primary">
          ${props.price}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.6, textAlign: "justify" }}
        >
          {props.description}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          startIcon={<RemoveRedEyeOutlinedIcon />}
          sx={{ borderRadius: 1.5, fontWeight: 600, textTransform: "none" }}
        >
          Explore
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
