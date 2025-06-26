import { NavBar } from "@/components/Navbar/NavBar";
import { SectionHero } from "@/components/SectionHero/SectionHero";
import { SectionWhatIsChantolgy } from "@/components/SectionWhatIsChantolgy/SectionWhatIsChantolgy";
import { SectionWhyChantingGames } from "@/components/SectionWhyChantingGames/SectionWhyChantingGames";
import { SectionOurGames } from "@/components/SectionOurGames/SectionOurGames";
import { SectionComingSoon } from "@/components/SectionComingSoon/SectionComingSoon";
import { SectionFooter } from "@/components/SectionFooter/SectionFooter";

export default function DraftPage() {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-b from-gray-700 via-gray-600 to-gray-400">
      <NavBar className="fixed top-0 left-0 right-0 z-50 w-full" />
      <div id="sections-container" className="mt-5 w-full flex flex-col">
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
