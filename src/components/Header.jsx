import React from "react";

const filterOptions = ["All Jackets",
    "2016",
    "jacket",
    "Jackets",
    "layers",
    "Obermeyer",
    "Roxy",
    "womens",
];

const sortOptions= [
"Featured",
"Best Selling",
"Alphabetically, A-Z",
"Alphabetically, Z-A",
"Price, low to high",
"Price, high to low",
"Date, new to old",
"Date, old to new",
];


const Header = () => {
    return (
        <nav className={"product-filter"}>
            <div className={"sort"}>
                <div className={"collection-sort"}>
                    <label>
                        Filter By:
                        <select>
                            { filterOptions.map(option => <option value={"/"}>option </option>)}
                        </select>
                    </label>
                    <label>
                        Sort By:
                        <select>
                            { sortOptions.map(option => <option value={"/"}>option </option>)}
                        </select>
                    </label>
                </div>
            </div>
        </nav>
    )
};

export default Header;
