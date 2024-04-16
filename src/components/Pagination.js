import React, { useContext, useRef } from "react";
import Arrow from "../assets/pagination-arrow.svg";
import { Cryptodata } from "./Context/Data";
import SubmitIcon from "../assets/submit-icon.svg";

const Pagination = () => {
  const { Page, SetPage, TotalPages, SetPerPage, PerPage, cryptoData } =
    useContext(Cryptodata);
  const LastPage = Math.ceil(TotalPages / PerPage); //we divide it by Perpage cuz currently PerPage pages are being displayed here
  // Math.ceil(TotalPages)
  const perpage = useRef(10);
  console.log(cryptoData);
  const ChangePerPage = (e) => {
    e.preventDefault();
    let val = perpage.current.value;
    SetPerPage(val);
    perpage.current.value = null;
  };

  if (cryptoData && cryptoData.length >= PerPage) {
    return (
      <>
        <div className="md:flex space-y-4 md:space-y-0 space-x-6 mb-10 ">
          <div className="mt-[0.10rem] ">
            <div className="flex">
              <span className="">Per page:</span>
              <input
                min={1}
                max={200}
                type="text"
                ref={perpage}
                className="w-8 text-center rounded ml-1  bg-gray-200 placeholder:text-gray-100 text-[#90EE90]"
                placeholder="10"
              />
              <img src={SubmitIcon} onClick={ChangePerPage} alt="" />
            </div>
          </div>
          <div>
            <ul className="flex space-x-2 ">
              {Page <= 1 ? null : (
                <>
                  {" "}
                  <li className="rotate-180  cursor-pointer " onClick={prev}>
                    <img src={Arrow} alt="" />
                  </li>
                </>
              )}
              {Page <= 1 ? null : (
                <>
                  {" "}
                  <li
                    onClick={dottedPrev}
                    className="w-4 h-4 flex   justify-center cursor-pointer"
                  >
                    ..
                  </li>
                </>
              )}
              {Page <= 1 ? null : (
                <>
                  {" "}
                  <li
                    onClick={prev}
                    className="border p-2 border-gray-200 text-[#90EE90]    bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    {Page - 1}
                  </li>
                </>
              )}

              <li
                disabled
                className="border border-[#90EE90] text-gray-300 font-semibold  bg-[#90EE90]  w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                {Page}
              </li>

              {Page == LastPage ? null : (
                <>
                  {" "}
                  <li
                    onClick={next}
                    className="border border-gray-200 text-[#90EE90]   bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    {Page + 1}
                  </li>
                </>
              )}

              {Page == LastPage ? null : (
                <>
                  {" "}
                  <li
                    onClick={dottedNext}
                    className="w-4 h-4 flex  justify-center cursor-pointer"
                  >
                    ..
                  </li>{" "}
                </>
              )}

              {Page == LastPage ? null : (
                <>
                  {" "}
                  <li
                    onClick={() => {
                      SetPage(LastPage);
                    }}
                    className="border border-gray-200  text-[#90EE90]  bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center p-4 cursor-pointer"
                  >
                    {LastPage}
                  </li>
                  <li onClick={next}>
                    <img src={Arrow} alt="" />
                  </li>{" "}
                </>
              )}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Pagination;
