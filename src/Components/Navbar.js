import * as React from "react";
import Button from "@mui/material/Button";
import classes from "../Components/navbar.module.scss";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className={classes.headerWrapper}>
        <header>
          <Grid container style={{ alignItems: "center" }}>
            <Grid item xs={4} className={classes.logo}>
              Logo
            </Grid>
            <Grid item xs={6} className={classes.navbar}>
              <ul className={classes.list}>
                <li className={classes.item}>
                  <Link href="#">
                    <a>About </a>
                  </Link>
                </li>
                <li className={classes.item}>
                  <Link href="#">
                    <a>Service </a>
                  </Link>
                </li>
                <li className={classes.item}>
                  <Link href="#">
                    <a>Product </a>
                  </Link>
                </li>
                <li className={classes.item}>
                  <Link href="#">
                    <a>Blog </a>
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="outlined"
                style={{
                  color: "orange",
                  backgroundColor: "white",
                  border: "none",
                }}
              >
                Contact me
              </Button>
            </Grid>
          </Grid>
        </header>
      </div>
    </div>
  );
}
