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
      "Louisville roofing contractor and owner with decades of hands-on expertise in roof replacement, emergency repairs, and storm damage restoration.",
    bio: "Brent Thompson is the owner and Field General of Champions Choice Roofing, a Louisville roofing contractor specializing in roof replacement, storm damage restoration, and emergency repairs. Coming from a family of builders, Brent brings three decades of hands-on craftsmanship and a commitment to quality that defines Champions Choice. An Owens Corning preferred contractor, he's handled countless insurance claim assistance projects and free roof inspections throughout Louisville and surrounding areas. When not managing roofing projects, Brent cheers on the Louisville Cardinals—and builds roofs that last.",
    imageSrc: "/images/team/brent.jpeg",
    team: "red",
  },
  {
    name: "Dean Brewer",
    title: "Part-Owner",
    nickname: 'The "Brand Champion"',
    shortBio:
      "Part-owner focused on building Champions Choice into Louisville's most trusted roofing contractor for roof replacement, storm damage restoration, and emergency repairs.",
    bio: "Dean Brewer is the Brand Champion and part-owner of Champions Choice Roofing, driving the company's mission to become Louisville's most trusted roofing contractor. With expertise in storm damage restoration, roof replacement, and insurance claim assistance, Dean ensures every homeowner receives a free roof inspection and fair pricing. As an Owens Corning preferred contractor partner, he's passionate about emergency repairs and helping Louisville families protect their homes. Dean combines brand vision with deep roofing expertise to deliver the customer champion service that defines Champions Choice. A Kentucky Wildcats fan, he's building Louisville's roofing reputation one project at a time.",
    imageSrc: "/images/team/dean.jpeg",
    team: "blue",
  },
  {
    name: "Wes Miller",
    title: "Sales",
    nickname: 'The "Chief Sales Champion"',
    shortBio:
      "Sales expert with 10 years of insurance industry experience specializing in storm damage restoration and insurance claim assistance for homeowners.",
    bio: "Wes Miller is the Chief Sales Champion at Champions Choice Roofing, bringing over 10 years of insurance expertise to every customer interaction. A military veteran with deep roots in the Louisville community, Wes specializes in insurance claim assistance and storm damage restoration. He guides homeowners through the entire process—from free roof inspections to navigating insurance claims for hail damage, wind damage, and emergency repairs. With his background in supplementing roofing projects and project management, Wes ensures every customer feels championed. A dedicated father and man of faith, Wes combines integrity with persistence to deliver the customer service Champions Choice is known for.",
    imageSrc: "/images/team/wes.jpeg",
  },
];
