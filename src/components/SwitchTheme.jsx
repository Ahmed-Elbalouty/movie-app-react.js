import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
// eslint-disable-next-line
function SwitchTheme({ value, setValue }) {
  function switchTheValue() {
    setValue(prev => !prev);
  }
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }} my={2} >
      <Typography color="text.primary">Light</Typography>
      <Switch checked={value} onChange={switchTheValue} />
      <Typography color="text.primary">Dark</Typography>
    </Stack>
  )
}

export default SwitchTheme
