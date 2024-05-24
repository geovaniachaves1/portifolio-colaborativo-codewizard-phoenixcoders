import React, { useEffect, useState } from "react"
import { Heading } from "./components/ui/heading"
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon
} from "lucide-react"
import {
  Team,
  TeamName,
  TeamSubtitle,
  TeamPersonalMain,
  TeamPersonalSocial,
  TeamPersonalSocialIcon,
  TeamPersonalAboutText,
  TeamProjectHeader,
  TeamProjectMain,
  TeamProjectContent,
  TeamProjectContentItem
} from "./components/teamComponent";
import { Button } from "./components/ui/button";

interface Person {
  name: string;
  imageUrl: string;
  subTitle: string;
  text: string;
  socials: {
    githubUrl: string;
    linkedinUrl: string;
    instagramUrl: string;
    facebookUrl: string;
  };
  projects: [
    {
      url: string,
      alt: string
    }
  ]
}

export default function OurTeam() {
  const [data, setData] = useState<Person[]>()

  useEffect(() => {
    const dataFethc = async () => {
      const response = await fetch('/src/data/team.json');
      const dataJson = await response.json() as Person[];
      setData(dataJson);
    }
    dataFethc()
  }, [])
  return (
    // TODO: Quando subir produção mudar key dos dados para url para nao usar o index
    <section className=" min-h-screen container mx-auto px-4 pb-6">
      <Heading className="py-4 mb-16" hilight>
        Desenvolvedores FrontEnd
      </Heading>
      <div className="space-y-14">
        {data?.map((team,index) => (
          <Team key={index}>
            <TeamPersonalMain imagerUrl={team.imageUrl}>
              <TeamName>
                {team.name}
              </TeamName>
              <TeamSubtitle>
                {team.subTitle}
              </TeamSubtitle>
              <TeamPersonalSocial>
                <TeamPersonalSocialIcon href={team.socials.githubUrl}>
                  <GithubIcon />
                </TeamPersonalSocialIcon>
                <TeamPersonalSocialIcon href={team.socials.linkedinUrl}>
                  <LinkedinIcon />
                </TeamPersonalSocialIcon>
                <TeamPersonalSocialIcon href={team.socials.instagramUrl}>
                  <InstagramIcon />
                </TeamPersonalSocialIcon>
                <TeamPersonalSocialIcon href={team.socials.facebookUrl}>
                  <FacebookIcon />
                </TeamPersonalSocialIcon>
              </TeamPersonalSocial>
              <TeamPersonalAboutText>
                {team.text}
              </TeamPersonalAboutText>
            </TeamPersonalMain>
            <TeamProjectMain >
              <TeamProjectHeader >
                <Button>Projeto Recentes</Button>
                <Button>Habilidades</Button>
              </TeamProjectHeader>
              <TeamProjectContent>
                {team.projects.map((project,index) => (
                  <TeamProjectContentItem
                    alt={project.alt}
                    src={project.url}
                    key={index}
                  />
                ))}
              </TeamProjectContent>
            </TeamProjectMain>
          </Team>
        ))}
      </div>
    </section>
  )
}