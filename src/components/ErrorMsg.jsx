import { Alert } from "@mui/material"

// eslint-disable-next-line
function ErrorMsg({ error }) {
  return (
    <Alert variant="filled" severity="error">
      {error}
    </Alert>
  )
}

export default ErrorMsg
