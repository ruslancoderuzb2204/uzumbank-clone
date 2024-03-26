import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-[1300px] flex justify-between py-6 mx-auto w-full px-20">
      <div className="flex ">
        <ul className="flex gap-6">
          <li>
            <Link href="products">Products</Link>
          </li>
          <li>
            <Link href="money-transfers">Money Transfers</Link>
          </li>
          <li>
            <Link href="tariffs">Tariffs</Link>
          </li>
          <li>
            <Link href='job-openings'>Job openings </Link>
          </li>
          <li>
            <Link href='tender'>Tender</Link>
          </li>
          <li>
            <Link href='exchange-rates'>Exchange Rates</Link>
          </li>
        </ul>
        <div className="ml-2">
            <label>
            <input type="text" />
                🔍
            </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
