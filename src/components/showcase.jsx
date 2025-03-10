import React from "react";
import Image from "next/image";
import Link from "next/link";

const showcase = () => {
  const project = [
    {
      img_url: "/img/pro_1.png",
      url: "/porfolio/project_1",
    },
    {
      img_url: "/img/pro_2.png",
      url: "/porfolio/project_2",
    },
    {
      img_url: "/img/pro_3.png",
      url: "/porfolio/project_3",
    },
    {
      img_url: "/img/pro_4.png",
      url: "/porfolio/project_4",
    },
    {
      img_url: "/img/pro_5.png",
      url: "/porfolio/project_5",
    },
    {
      img_url: "/img/pro_1.png",
      url: "/porfolio/project_6",
    },
  ]
  return (
    <>
      <div className="min-h-dvh showcase flex items-center justify-around gap-y-9 gap-x-6 flex-wrap p-4">
        {
          project.map((card, index) => {
            return (
              <div className="bg-white hover:shadow-2xl hover:border-solid hover:border-2 hover:border-white bg-opacity-40 showbox flex items-center justify-center p-2 rounded-2xl w-[300px] h-[300px] dark:bg-slate-900 dark:border-opacity-20  dark:hover:bg-slate-700 hover:scale-105 transition-all" key={index}>
                <Link href={card.url}>
                  <Image
                    src={card.img_url}
                    alt="img"
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default showcase;
