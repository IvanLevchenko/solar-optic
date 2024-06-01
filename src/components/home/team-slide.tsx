import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useContext, useRef, useState } from "react";

import { LanguageContext } from "../../context/language-context";
import slideLocalization from "../../localization/home.json";

import member1 from "../../assets/team-members/1.png";
import member2 from "../../assets/team-members/2.png";
import member3 from "../../assets/team-members/3.png";
import member4 from "../../assets/team-members/4.jpg";
import member5 from "../../assets/team-members/5.jpg";
import linkedInIcon from "../../assets/linkedin.png";
import emailIcon from "../../assets/email.png";

import paginatorArrow from "../../assets/paginatorArrow.png";

import "swiper/css";
import "swiper/css/pagination";

const members = [
  {
    image: member1,
    icon: linkedInIcon,
    title: slideLocalization.members[0].title,
    name: slideLocalization.members[0].name,
    socialLink: slideLocalization.members[0].socialLink,
  },
  {
    image: member2,
    icon: linkedInIcon,
    title: slideLocalization.members[1].title,
    name: slideLocalization.members[1].name,
    socialLink: slideLocalization.members[1].socialLink,
  },
  {
    image: member3,
    icon: linkedInIcon,
    title: slideLocalization.members[2].title,
    name: slideLocalization.members[2].name,
    socialLink: slideLocalization.members[2].socialLink,
  },
  {
    image: member4,
    icon: emailIcon,
    title: slideLocalization.members[3].title,
    name: slideLocalization.members[3].name,
    socialLink: slideLocalization.members[3].socialLink,
  },
  {
    image: member5,
    icon: linkedInIcon,
    title: slideLocalization.members[4].title,
    name: slideLocalization.members[4].name,
    socialLink: slideLocalization.members[4].socialLink,
  },
];

function TeamSlide(): JSX.Element {
  const { language } = useContext(LanguageContext);
  const swiperRef = useRef(null);

  const localization = slideLocalization.teamSlide;

  const handleNext = (): void => {
    // @ts-ignore
    if (swiperRef.current?.swiper) {
      // @ts-ignore
      swiperRef.current?.swiper.slidePrev();
    }
  };

  const handlePrev = (): void => {
    // @ts-ignore
    if (swiperRef.current?.swiper) {
      // @ts-ignore
      swiperRef.current?.swiper.slideNext();
    }
  };

  return (
    <div className="p-6 w-[50%] h-full mx-auto relative">
      <div className="bg-accent-yellow absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[120px] z-[-1]"></div>
      <div className="mt-16 h-full">
        <div className="text-3xl text-center mb-10">
          {localization.title[language]}
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={3.5}
          className="mySwiper h-1/2 z-5"
        >
          {members.map((member, index) => {
            return (
              <SwiperSlide className="p-6" key={index}>
                <TeamMemberCard
                  memberImage={member.image}
                  title={members[index].title[language]}
                  name={members[index].name[language]}
                  icon={members[index].icon}
                  link={members[index].socialLink}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex gap-4 justify-center">
          <div
            className="cursor-pointer bg-base-blue rounded-full p-6"
            onClick={handleNext}
          >
            <img src={paginatorArrow} alt="Arrow" />
          </div>
          <div
            className="cursor-pointer bg-base-blue rounded-full p-6 rotate-180"
            onClick={handlePrev}
          >
            <img src={paginatorArrow} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

type TeamMemberCardProps = {
  memberImage: string;
  title: string;
  name: string;
  icon: string;
  link: string;
};

function TeamMemberCard(props: TeamMemberCardProps): JSX.Element {
  const processLink = (link: string): string => {
    const mailPrefix = "mailto:";

    if (link.includes(mailPrefix)) {
      return link.split(mailPrefix)[1];
    }

    return link.slice(0, 25) + "...";
  };

  return (
    <div className="shadow-xl object-fill flex flex-col justify-start h-[410px] bg-white rounded-3xl p-8">
      <img
        src={props.memberImage}
        className="h-[240px] rounded-3xl"
        alt="Member"
      />
      <div className="text-gray-400 mt-2">{props.title}</div>
      <div className="text-2xl">{props.name}</div>
      <p className="flex items-center">
        <img src={props.icon} alt="Icon" />
        <a href={props.link} className="underline">
          {processLink(props.link)}
        </a>
      </p>
    </div>
  );
}

export default TeamSlide;
