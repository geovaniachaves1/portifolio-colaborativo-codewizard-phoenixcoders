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
}
import React, { useEffect, useState } from "react"
import { TitleSection } from "./components/title-section"
import { SocialButton } from "./components/social-button"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
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
    <section className=" min-h-screen container mx-auto px-4 pb-6">
      <TitleSection className="py-4 mb-16" hilight>
        Desenvolvedores FrontEnd
      </TitleSection>

      <div className="space-y-14">
        {data?.map((team) => (
          <div className="flex flex-col">
            <div className="flex flex-col gap-8 items-center font-custom-inconsolata md:flex-row md:items-start  ">
              <div className="w-36 md:min-w-64  ">
                <img className="rounded-lg" src={team.imageUrl} alt="" />
              </div>
              <div className="w-full flex flex-col items-center md:items-start ">
                <div>
                  <span className="text-emerald-primary text-2xl tracking-widest font-bold ">{team.name}</span>
                </div>
                <div>
                  <span className="text-xl">{team.subTitle}</span>
                </div>
                <div className="flex gap-8 p-4">
                  <SocialButton href={team.socials.githubUrl}>
                    <GithubIcon />
                  </SocialButton>
                  <SocialButton href={team.socials.linkedinUrl}>
                    <LinkedinIcon />
                  </SocialButton>
                  <SocialButton href={team.socials.instagramUrl}>
                    <InstagramIcon />
                  </SocialButton>
                  <SocialButton href={team.socials.facebookUrl}>
                    <FacebookIcon />
                  </SocialButton>
                </div>
                <div className="max-w-2xl">
                  <p>{team.text}</p>
                </div>


              </div>

            </div>
            <div >
              <div className=" mt-12 flex justify-center md:justify-start  gap-8">
                <button className="bg-dark-color-secondary w-48 px-4 py-2 rounded">Projetos Recentes</button>
                <button className="bg-dark-color-secondary w-48 px-4 py-2 rounded">Habilidades</button>
              </div>

              <div className="md:grid lg:grid-cols-3 grid-cols-2 mt-8 gap-4 hidden">
                <div className="rounded-md">
                  <img src="https://s3-alpha-sig.figma.com/img/f396/d2e2/a73fd9a89e3958c883862a621dfad104?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fd3Ot0qyJ6~c-HIfWQWRCM94lLftzR7z69pKjkfYiAC9Pzvc3dgrwr-Ti0IOmKnacnWrfvjG~vM3r7m~D740mF7GNTRxMpc74YzKxDrqKoNOxz2OpYn1hNOlNnDo0J6Klvi58qdp0MDooNt494lYhTXyZ3Q~az0uuug7Rw1wbSNmh4hnXOUGOsuBeEN1QQgiS02GQFRohHZVX7Y7pK~IjvJalm1OR62iPslC4q53t8B1IUU4kq2wEtjNC67QOBkOYzU~d6m5iRAjdO2xuxxPbxNoadne~Hsi2eFPn1Gw8MmHwGYRMjJOtQx2Kqr46m9QYbR8gT4vJ4rFyk8~2tjRUg__" alt="" />
                </div>
                <div className="rounded-md">
                  <img src="https://s3-alpha-sig.figma.com/img/a790/c723/3be06303006a8fbde2ea2e7666d34217?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExbI4o0dbA6TWZ2JWTMa3O-GEJcwUsiBNWCWfn6InYjeiNA~hAa9kbHmCLB8mkLTIu1dWCd6S~Mjyz38cPM0kfB~08xO-g76Jon0rtzXgD8aCH0afNS1gieg-B9Nr73Eb9rXSEVly89yDPttvfLpKYAlpWDfoCldIwbLMIiyLutUma43Jw9tH9h3dTiWR8A8KQxmsk-d0svbdXu8h2lMzQXW4I-8fFDgivO85mNwuIpB4NnMcMwl1ugcsdeMYzx1E3GGAM9zHSweTgahSzNi8Yo2Tl8HJVuDXANv2iB~1dg4T21bNLov53ihSPojPwxk2FcpollIvim7T1-kSYWFig__" alt="" />
                </div>
                <div className="rounded-md">
                  <img src="https://s3-alpha-sig.figma.com/img/e571/c7aa/cb93fc03d3a417163fede0ac4d5ed698?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eCj-PfQygCR-T63XvxfR~ruQSlWfPoh8zf8V0dofzL~LMrgKmUrm0cv6QXFI2ueORGmPLsm5yE7~zIdZ9vcc0eBopUT2jR-xfioTkHdWwnaIjDJ8i3qlf2i5G5VA2dfNyRHqN~kuEIMmgvOlJ94feTnhHTuOZGVriSs-2EdB7mDjow6t-3Dk9XpGWBN8LJye~nU51-jjuf85RJZZclrWJ~U2ei2ThqluQMifKSAGyQxK9PnIeqr1zeNPPyANvseZyVMX7a0bhJP8DqyKSsdmBrFFgQH8rc~JaI5099o1Xvusvs4jiOaKwvBQmgtOK2tGhc9kES4uOMWBzvZYVNtwXQ__" alt="" />
                </div>
                <div className="rounded-md">
                  <img src="https://s3-alpha-sig.figma.com/img/f396/d2e2/a73fd9a89e3958c883862a621dfad104?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fd3Ot0qyJ6~c-HIfWQWRCM94lLftzR7z69pKjkfYiAC9Pzvc3dgrwr-Ti0IOmKnacnWrfvjG~vM3r7m~D740mF7GNTRxMpc74YzKxDrqKoNOxz2OpYn1hNOlNnDo0J6Klvi58qdp0MDooNt494lYhTXyZ3Q~az0uuug7Rw1wbSNmh4hnXOUGOsuBeEN1QQgiS02GQFRohHZVX7Y7pK~IjvJalm1OR62iPslC4q53t8B1IUU4kq2wEtjNC67QOBkOYzU~d6m5iRAjdO2xuxxPbxNoadne~Hsi2eFPn1Gw8MmHwGYRMjJOtQx2Kqr46m9QYbR8gT4vJ4rFyk8~2tjRUg__" alt="" />
                </div>
                <div className="rounded-md">
                  <img src="https://s3-alpha-sig.figma.com/img/e571/c7aa/cb93fc03d3a417163fede0ac4d5ed698?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eCj-PfQygCR-T63XvxfR~ruQSlWfPoh8zf8V0dofzL~LMrgKmUrm0cv6QXFI2ueORGmPLsm5yE7~zIdZ9vcc0eBopUT2jR-xfioTkHdWwnaIjDJ8i3qlf2i5G5VA2dfNyRHqN~kuEIMmgvOlJ94feTnhHTuOZGVriSs-2EdB7mDjow6t-3Dk9XpGWBN8LJye~nU51-jjuf85RJZZclrWJ~U2ei2ThqluQMifKSAGyQxK9PnIeqr1zeNPPyANvseZyVMX7a0bhJP8DqyKSsdmBrFFgQH8rc~JaI5099o1Xvusvs4jiOaKwvBQmgtOK2tGhc9kES4uOMWBzvZYVNtwXQ__" alt="" />
                </div>
                <div className="rounded-md">
                  <img src="https://s3-alpha-sig.figma.com/img/a790/c723/3be06303006a8fbde2ea2e7666d34217?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExbI4o0dbA6TWZ2JWTMa3O-GEJcwUsiBNWCWfn6InYjeiNA~hAa9kbHmCLB8mkLTIu1dWCd6S~Mjyz38cPM0kfB~08xO-g76Jon0rtzXgD8aCH0afNS1gieg-B9Nr73Eb9rXSEVly89yDPttvfLpKYAlpWDfoCldIwbLMIiyLutUma43Jw9tH9h3dTiWR8A8KQxmsk-d0svbdXu8h2lMzQXW4I-8fFDgivO85mNwuIpB4NnMcMwl1ugcsdeMYzx1E3GGAM9zHSweTgahSzNi8Yo2Tl8HJVuDXANv2iB~1dg4T21bNLov53ihSPojPwxk2FcpollIvim7T1-kSYWFig__" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>


    </section>
  )
}