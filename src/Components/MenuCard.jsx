import * as React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";

export default function MenuCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {open ? (
          <CloseIcon />
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        component={motion.div} // Add motion to the Menu component
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 text-white"
        >
          <MenuItem onClick={handleClose}>
            <a href="#home" className="hover:text-red-700">
              HOME
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#about" className="hover:text-red-700">
              ABOUT US
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#skills" className="hover:text-red-700">
              SKILLS
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#work" className="hover:text-red-700">
              WORK
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#contact" className="hover:text-red-700">
              CONTACT
            </a>
          </MenuItem>
        </motion.div>
      </Menu>
    </div>
  );
}
