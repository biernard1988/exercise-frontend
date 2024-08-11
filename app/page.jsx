"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6"

export default function Home() {
  const [showDialog, setShowDialog] = useState(false)

  const toggleDialog = () => {
    setShowDialog(!showDialog)
  }

  return (
    <main className="container mx-auto md:w-[1440px] h-screen flex justify-center items-center bg-lightGrayish">
      <div className="w-[400px] md:w-7/12 md:h-[320px] bg-gray-50 shadow-lg flex flex-col md:flex-row justify-center items-center rounded-lg md:rounded-r-lg my-10">
        <Image
          className="rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="/images/drawers.jpg"
          alt="Furniture"
          style={{
            objectFit: "contain",
          }}
          width={400}
          height={400}
        />

        <div className="p-8 md:px-12 flex flex-col gap-2 md:gap-2 md:w-[60%]">
          <h1 className="font-bold text-darkGrayishBlue mb-4">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-sm text-darkBlue">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="my-5 md:mb-0 flex gap-12 md:gap-8 relative md:mt-10">
            <Image
              src="/images/avatar-michelle.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="Michelle Appleton"
            />
            <div className="space-y-2">
              <p className="text-darkGrayishBlue text-sm font-semibold">
                Michelle Appleton
              </p>
              <p className="text-grayishBlue text-sm">28 Jun 2020</p>
            </div>
            <button
              id="open-dialog"
              onClick={toggleDialog}
              className={`${
                showDialog ? "bg-pink-400" : "bg-lightGrayish"
              } rounded-full flex justify-center items-center w-10 h-10`}
            >
              {showDialog ? (
                <Image
                  src="/images/icon-twitter.svg"
                  width={20}
                  height={20}
                  alt="Share Icon"
                />
              ) : (
                <Image
                  src="/images/icon-share.svg"
                  width={20}
                  height={20}
                  alt="Close Icon"
                />
              )}
            </button>

            {showDialog && (
              <div className="absolute top-full mt-2 right-0 bg-darkGrayishBlue text-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-center gap-5 text-2xl">
                  <Link href="https://www.facebook.com" target="_blank">
                    <FaSquareFacebook />
                  </Link>
                  <Link href="https://www.x.com" target="_blank">
                    <FaSquareXTwitter />
                  </Link>
                  <Link href="https://www.instagram.com" target="_blank">
                    <FaSquareInstagram />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
