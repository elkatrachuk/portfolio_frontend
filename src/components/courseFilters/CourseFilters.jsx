import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const CourseFilters = (props) => {
  const { applyFilters } = props;
  const [values, setValues] = useState({
    author: "",
    rating: "",
    levelId: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box>
      <Stack
        spacing={2}
        ml={4}
        mb={5}
        direction="row"
        justifyContent="flex-start"
      >
        {/* <TextField
          size="small"
          sx={{ width: "100px" }}
          name="author"
          label="Author"
          variant="outlined"
          value={values.author}
          onChange={handleChange}
        /> */}
        <FormControl size="small" sx={{ width: "100px" }}>
          <InputLabel>Rating</InputLabel>
          <Select
            name="rating"
            value={values.rating}
            label="Rating"
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ width: "100px" }}>
          <InputLabel>Level</InputLabel>
          <Select
            name="levelId"
            value={values.levelId}
            label="Level"
            onChange={handleChange}
          >
            <MenuItem value={1}>junior</MenuItem>
            <MenuItem value={2}>middle</MenuItem>
            <MenuItem value={3}>senior</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={() => {
            applyFilters(values);
          }}
        >
          Apply
        </Button>
      </Stack>
    </Box>
  );
};
export { CourseFilters };
