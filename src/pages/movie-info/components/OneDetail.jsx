import { Box, Typography } from "@mui/material";
// eslint-disable-next-line
function OneDetail({ title, content }) {
  return (
    <Box my={3}>
      <Typography component="p" variant="body1" color="text.secondary">
        {title}
      </Typography>
      {typeof content === "string" ? (
        <Typography component="div" variant="h6" ml={2.5} color="text.primary">
          {content}
        </Typography>
      ) : (
        <Typography component="div" variant="h6" color="text.primary">
          {content}
        </Typography>
      )}
    </Box>
  );
}

export default OneDetail;