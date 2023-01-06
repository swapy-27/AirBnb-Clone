import React from "react";
import Image from "next/image";
import background from '../public/images/background.jpg'
export default function Baner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={background} alt="background-image" fill />
      <div className="flex flex-col items-center absolute top-[50%] left-[40%]">
        <p>Not sure where to go ? Perfect.</p>
        <div>
          <p>I&apos;m flexible</p>
        </div>
      </div>
    </div>
  );
}
