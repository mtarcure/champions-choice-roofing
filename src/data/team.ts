export interface TeamMember {
  name: string;
  title: string;
  nickname: string;
  /** Short bio used in the team preview card on the homepage. */
  shortBio: string;
  /** Full bio used on the about page. */
  bio: string;
  imageSrc: string;
  team?: "red" | "blue";
}

export const teamMembers: TeamMember[] = [
  {
    name: "Brent Thompson",
    title: "Owner",
    nickname: 'The "Field General"',
    shortBio:
      "Veteran contractor with a family legacy in building. Passionate about quality craftsmanship and doing right by every homeowner.",
    bio: "A veteran contractor who comes from a family of builders, Brent brings decades of hands-on experience to every project. His commitment to quality craftsmanship is the foundation Champions Choice was built on. When he's not on a roof, you'll find him cheering on the Louisville Cardinals.",
    imageSrc: "/images/team/brent.jpeg",
    team: "red",
  },
  {
    name: "Dean Brewer",
    title: "Part-Owner",
    nickname: 'The "Brand Champion"',
    shortBio:
      "Building Champions Choice into Louisville's most recognized and trusted roofing brand.",
    bio: "Dean is the marketing and brand visionary behind Champions Choice. He's building the company into Louisville's most recognized and trusted roofing name. A proud Wildcats fan and soon-to-be father, Dean brings energy and ambition to everything he touches.",
    imageSrc: "/images/team/dean.jpeg",
    team: "blue",
  },
  {
    name: "Wes Miller",
    title: "Sales",
    nickname: 'The "Chief Sales Champion"',
    shortBio:
      "10 years of insurance expertise. Military veteran dedicated to championing for every customer.",
    bio: "With 10 years of insurance expertise and a background in military service, Wes knows how to fight for homeowners. A dedicated father and man of faith, he brings integrity and persistence to every customer interaction.",
    imageSrc: "/images/team/wes.jpeg",
  },
];
