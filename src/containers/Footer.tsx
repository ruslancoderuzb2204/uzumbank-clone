import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#7000ff]">
      <ul className="max-w-[1300px] flex justify-between py-6 text-white mx-auto w-full px-20">
        <li>
          <h3 className="text-xl py-4">Products</h3>
          <ul>
            <li>
              <Link href="#" className=" cursor-pointer">
                Cards
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Credits
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Deposits
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Acoounts
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Wallets
              </Link>
            </li>
            <Link href="#" className=" cursor-pointer">
              Money Transfers
            </Link>
          </ul>
        </li>
        <li>
          <h3 className="text-xl py-4">Services</h3>
          <ul>
            <li>
              <Link href="#" className=" cursor-pointer">
                My home
              </Link>
            </li>

            <li>
              <Link href="#" className=" cursor-pointer">
                UzASBO
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                HUMO Pay
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Transfer to requirists
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Kindergarten Payments
              </Link>
            </li>
           
          </ul>
        </li>
        <li>
          <h3 className="text-xl py-4">About the Bank</h3>
          <ul>
            <li>
              <Link href="#" className=" cursor-pointer">
              Bank structure

              </Link>
            </li>

            <li>
              <Link href="#" className=" cursor-pointer">
                Management
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Bank details
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Bank Charter
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                State Symbols
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Essential Facts
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Local Acts
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Development Strategy
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Bank Mission
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
              Documents
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
              Events
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-xl py-4">Shareholders and investors</h3>
          <ul>
            <li>
              <Link href="#" className=" cursor-pointer">
                Meeting of Shareholders
              </Link>
            </li>

            <li>
              <Link href="#" className=" cursor-pointer">
                Auditing
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Information about Dividends
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Affiliates
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Emission
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Business Plan
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Corporate Govarnance
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Financial Data
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Stocks
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="text-xl py-4">Email</h3>
          <ul>
            <li>
              <Link href="#" className=" cursor-pointer">
                info@uzumbank.uz
              </Link>
            </li>

            <li>
              <Link href="#" className="text-xl block mt-4 cursor-pointer">
                Interactive services
              </Link>
            </li>
            <li>
              <Link href="#" className=" cursor-pointer">
                Appeals of Individuls and legal entities
              </Link>
            </li>
           
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
