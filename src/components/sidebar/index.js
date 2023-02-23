import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

export default function Sidebars() {
  return (
    <div>
      <div className="sidebar" style={{ display: "", height: "100%" }}>
        <Sidebar className="css-1k88rtw" >
          <h3 className="text-center my-5">Filter</h3>
          <Menu className="  border-top">
            <h4 className="font-bolder  text-lg text-center">
              Food Categories
            </h4>

            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Souese</span>{" "}
            </MenuItem>

            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Salads</span>{" "}
            </MenuItem>
            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Paratha</span>{" "}
            </MenuItem>
            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Desserts</span>{" "}
            </MenuItem>
            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Souese</span>{" "}
            </MenuItem>

            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Salads</span>{" "}
            </MenuItem>
            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Paratha</span>{" "}
            </MenuItem>
            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Desserts</span>{" "}
            </MenuItem>
            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Souese</span>{" "}
            </MenuItem>

            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Salads</span>{" "}
            </MenuItem>
            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Paratha</span>{" "}
            </MenuItem>
            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Desserts</span>{" "}
            </MenuItem>
            <MenuItem>
              <BsCheckCircle />
              <span className="ms-1 fs-5"> Souese</span>{" "}
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
}
