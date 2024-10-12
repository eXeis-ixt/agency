"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Fahad Bhuiyan",
    designation: "The Developer and COO",
    image:
      "https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/454635376_122275786118001501_2519338261832678253_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cphkAYCjNBYQ7kNvgHIuo7K&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=AJYMx7I0sBs0kkDDeWi6tK5&oh=00_AYB-gNZWM5PnYPgx5RdFsyOQwJiQTJ5MfqIR9Kxth4ieEA&oe=67103089",
  },
  {
    id: 2,
    name: "Farhan Nasim Dipto",
    designation: "Front end developer and CTO",
    image:
      "https://avatars.githubusercontent.com/u/74399629?v=4",
  },
  {
    id: 3,
    name: "Tushar Saha",
    designation: "Graphics desginer",
    image:
      "https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/461439547_843980754526817_7736286745058338956_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lDmOHsdVVBQQ7kNvgFk0GUh&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=AI8vusrBMclCCL783mqxook&oh=00_AYDh8VSsxls9uT3QQnaOwrgU5jDEcU39J3ZM_ueNyFL5qQ&oe=671027A4",
  },
  {
    id: 4,
    name: "Sarvan Saha",
    designation: "Frontend Developer and CEO",
    image:
      "https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/453632333_479036801433397_6953598485679804014_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KAx66Ufy_bMQ7kNvgFe_TvY&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=ATRIxPdL6euNqldukaYpZA_&oh=00_AYA2MxR-Z8jOFCYh7p091P7H_Vh7xqZw_8ySS07SUrICnA&oe=6710120E",
  },
  {
    id: 5,
    name: "Marzia Ali",
    designation: "Social media manager",
    image:
      "https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/440445453_448731334397106_7729753845244515708_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1_LNgSUuzncQ7kNvgEwuEcj&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=AwjRvH4QDlGHVOvJzGeHF8u&oh=00_AYDCf2pqSK-pg8UMIB8spiU4jlCYP17XcJpEnIfqi45HSg&oe=671004BD",
  },
  
];

export function Team() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
