import { FC, ReactNode, memo } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

type ICaption = {
  title: string;
  desc: string;
  img: string;
};

const BlankPage: FC<{ text?: string }> = ({ text }) => {
  const navigate = useNavigate();

  const caption: () => ICaption = () => {
    let caption = {
      title: "",
      desc: "",
      img: "",
    };
    switch (text) {
      case "403":
        caption = {
          title: "Access Denied/Forbidden",
          desc: "Sorry, you don't have permission to access this page.",
          img: "",
        };
        break;
      case "404":
        caption = {
          title: "Page Not Found",
          desc: "Sorry, we couldn't locate the page you were looking for.",
          img: "",
        };
        break;
      case "500":
        caption = {
          title: "Internal Server Error",
          desc: "Sorry, something went wrong on our end, and we're working to fix it.",
          img: "",
        };
        break;
      default:
        break;
    }
    return caption;
  };

  const component: () => ReactNode = () => {
    if (text?.length === 3) {
      return (
        <>
          <div className="flex flex-row justify-center items-center divide-x">
            <div className="w-[90px] h-[90px] flex flex-row justify-center items-center bg-[#F5EBFD] rounded-full mr-9">
              <img src={caption().img} alt="403" />
            </div>
            <div className="h-[90px] flex flex-row justify-center items-center pl-9">
              <p className="text-5xl text-bodyCaption font-extralight">
                {text}
              </p>
            </div>
          </div>
          <p className="font-bold text-xl mb-2 mt-7">{caption().title}</p>
          <p className="text-bodyCaption text-sm mb-7">{caption().desc}</p>
        </>
      );
    }
    return (
      <p className="text-bodyCaption text-sm mb-6">
        {text ? text : "-"}
      </p>
    );
  };

  return (
    <div className="flex flex-row justify-center items-center w-full h-[80vh] ">
      <div className="text-center">
        {component()}
        {text && <button onClick={() => navigate(-1)}>Back</button>}
      </div>
    </div>
  );
};

export default memo(BlankPage);
