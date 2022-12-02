import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "aqua",
  "&:hover": {
    backgroundColor: "aqua",
    color: "black",
    borderColor: "aqua",
  },
  fontSize: "20px",
  height: "75px",
  width: "200px",
  borderRadius: "40px",
  borderColor: "aqua",
  borderWidth: "2px",
  marginRight: "5px",
  marginLeft: "5px",
}));

export default ColorButton;
