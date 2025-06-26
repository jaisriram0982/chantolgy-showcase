import { NavBar } from "@/components/Navbar/NavBar";
import { SectionHero } from "@/components/SectionHero/SectionHero";
import { SectionWhatIsChantolgy } from "@/components/SectionWhatIsChantolgy/SectionWhatIsChantolgy";
import { SectionWhyChantingGames } from "@/components/SectionWhyChantingGames/SectionWhyChantingGames";
import { SectionOurGames } from "@/components/SectionOurGames/SectionOurGames";
import { SectionComingSoon } from "@/components/SectionComingSoon/SectionComingSoon";
import { SectionFooter } from "@/components/SectionFooter/SectionFooter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-700 via-gray-600 to-gray-400">
      <NavBar className="fixed top-0 left-0 right-0 z-50" />
      <div id="sections-container" className="mt-20">
        <SectionHero />
        <SectionWhatIsChantolgy />
        <SectionWhyChantingGames />
        <SectionOurGames />
        <SectionComingSoon />
        <SectionFooter />
      </div>
    </div>
  );
}
