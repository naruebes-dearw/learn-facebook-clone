import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// render
export default function () {
  return (
    <div>
      <TextField
        label="With normal TextField"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SearchIcon />
              <IconButton>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}
