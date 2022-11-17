import { Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchRounded from "@mui/icons-material/SearchRounded";

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}
export const Search = ({ setSearch, handleSearch }: SearchProps) => {
  return (
    <Box>
      <TextField
        id="input-with-icon-textfield"
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Button data-testid="bt_test" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};
