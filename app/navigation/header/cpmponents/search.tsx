"use client";

import { FC } from "react";
import classes from "../style/search.module.scss";
const Search: FC = () => {
    return (
        <div className={classes["container"]}>
            <input placeholder="Search" className={classes["search_input"]} />
        </div>
    );
};
export default Search;
