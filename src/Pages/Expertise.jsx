import React from "react";
import Communication from "../assets/Expertise/soft-skills/Communication.svg";
import ProblemSolving from "../assets/Expertise/soft-skills/Problem-Solving.svg";
import SelfLearning from "../assets/Expertise/soft-skills/Sel-Learning.svg";
import TeamWork from "../assets/Expertise/soft-skills/Teamwork.svg";
import TimeManagement from "../assets/Expertise/soft-skills/Time-Management.svg";
const Expertise = () => {
  const Languages = [
    {
      name: "HTML",
      img: "https://skillicons.dev/icons?i=html",
    },
    {
      name: "CSS",
      img: "https://skillicons.dev/icons?i=css",
    },
    {
      name: "JS",
      img: "https://skillicons.dev/icons?i=js",
    },
    {
      name: "Python",
      img: "https://skillicons.dev/icons?i=py",
    },
    {
      name: "SQL",
      img: "https://skillicons.dev/icons?i=sqlite",
    },
    {
      name: "C",
      img: "https://skillicons.dev/icons?i=c",
    },
    {
      name: "C++",
      img: "https://skillicons.dev/icons?i=cpp",
    },
  ];
  const Tools = [
    {
      name: "Git",
      img: "https://skillicons.dev/icons?i=git",
    },
    {
      name: "GitHub",
      img: "https://skillicons.dev/icons?i=github",
    },
    {
      name: "VSCode",
      img: "https://skillicons.dev/icons?i=vscode",
    },
    {
      name: "Figma",
      img: "https://skillicons.dev/icons?i=figma",
    },
    {
      name: "Vercel",
      img: "https://skillicons.dev/icons?i=vercel",
    },
    {
      name: "Netlify",
      img: "https://skillicons.dev/icons?i=netlify",
    },
  ];
  const SoftSkills = [
    {
      name: "Communication",
      img: <img src={Communication} alt="Communication" className="h-[40px]" />,
    },
    {
      name: "Problem Solving",
      img: (
        <img src={ProblemSolving} alt="Problem Solving" className="h-[40px]" />
      ),
    },
    {
      name: "Self Learning",
      img: <img src={SelfLearning} alt="Self Learning" className="h-[40px]" />,
    },
    {
      name: "Team Work",
      img: <img src={TeamWork} alt="Team Work" className="h-[40px]" />,
    },
    {
      name: "Time Management",
      img: (
        <img src={TimeManagement} alt="Time Management" className="h-[40px]" />
      ),
    },
  ];

  return (
    <div className="w-[100vw] overflow-x-hidden gap-[40px] flex flex-col justify-center pl-5 pr-5 ">
      {/* Languages  */}
      <div className="border border-[#1D4ED8] flex flex-col items-center gap-[30px] rounded-[30px] bg-[#1d4fd84a] shadow-[0px_0px_10px_10px_#0066ff26] p-[10px_0_10px_0] ">

        <h1 className="text-[50px]">Languages</h1>

        <div className="flex gap-[100px]">
          {Languages.map((data) => (
            <div key={data.name}>
              <div className="flex  justify-evenly flex-wrap m-2.5 ">
                <img src={data.img} alt={data.name} srcset="" />
              </div>
              <p className="text-[16px] text-center">{data.name} </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools   */}
      <div className="border border-[#1D4ED8] flex flex-col items-center gap-[30px] rounded-[30px] bg-[#1d4fd84a] shadow-[0px_0px_10px_10px_#0066ff26] p-[10px_0_10px_0] ">
        <h1 className="text-[50px]">Tools</h1>
        <div className="flex gap-[100px]">
          {Tools.map((data) => (
            <div key={data.name}>
              <div className="flex  justify-evenly flex-wrap m-2.5">
                <img src={data.img} alt={data.name} srcset="" />
              </div>
              <p className="text-[16px] text-center">{data.name} </p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft-Skills */}
      <div className="border border-[#1D4ED8] flex flex-col items-center gap-[30px] rounded-[30px] bg-[#1d4fd84a] shadow-[0px_0px_10px_10px_#0066ff26] p-[10px_0_10px_0] ">
        <h1 className="text-[50px]">Soft-Skills</h1>
        <div className="flex gap-[100px]">
          {SoftSkills.map((data) => (
            <div key={data.name}>
              <div className="flex  justify-evenly flex-wrap m-2.5">
                {data.img}
              </div>
              <p className="text-[16px] text-center">{data.name} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
