import React from "react";
import { GlobeAltIcon } from "@heroicons/react/20/solid";
export default function Footer() {
  return (
    <footer className="fixed grid grid-cols-2 z-50 bottom-0 bg-white w-[100vw] py-3 px-5  my-auto border-t-2">
      <div className="flex items-center">
        <p>© 2023 Swapy, Inc.</p>
        <ul className="flex items-center ml-2 cursor-pointer ">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemap</li>
          <li>Company</li>
          <li>details</li>
          <li>Destinations</li>
        </ul>
      </div>
      <div className="flex items-center ml-2 cursor-pointer justify-end">
        <div className="flex items-center">
          <GlobeAltIcon className="h-6 " />
          <p className="ml-1">English (IN)</p>
        </div>
        <p className="ml-5">₹ INR</p>
        <p className="ml-5">Support & resources</p>
      </div>
    </footer>
  );
}
