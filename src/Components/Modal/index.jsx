import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import BasicTable from "../Table";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxHeight: "90%",
  bgcolor: "background.paper",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: 4,
  p: 4,
};

export default function BasicModal({ values, lang, isValid }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const haveAllValues = () => {
    for (const [key, value] of Object.entries(values)) {
      if (value == "") {
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      {haveAllValues() && isValid ? (
        <Button
          onClick={handleOpen}
          sx={{ border: 1, bgcolor: "transparent", color: "grey.50" }}
        >
          {lang.formShowBtn}{" "}
        </Button>
      ) : (
        <Button onClick={handleOpen} disabled>
          {lang.formShowBtn}
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BasicTable values={values} lang={lang} />
        </Box>
      </Modal>
    </div>
  );
}
