import { styled } from "@mui/system";


export const ChatContainer = styled("div")({
  width: "80vw",
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "0.5px solid #d8d8d8",
  padding: "2em",
  borderRadius: "10px",

  ".form-container": {
    display: "flex",
    justifyContent: "space-between",

    input: {
      width: "92%",
      borderStyle: "none",
      border: "0.5px solid #393e46",
      borderRadius: "10px",
      padding: "0.5em",
      fontSize: "1em",

      "&:focus": {
        outline: "none",
      },
    },

    button: {
      background: "#e5dfdf",
      color: "#393e46",
      borderStyle: "none",
      borderRadius: '10px',
      padding: '0.5em',
      fontSize: '1em',
      "&:hover": {
        opacity: 0.8,
        cursor: "pointer",
      },
    },
  },
});
