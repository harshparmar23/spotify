import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useEffect } from "react";
import FeaturedSection from "./Components/FeaturedSection ";
import SectionGrid from "./Components/SectionGrid";

function HomePage() {
  const {
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    isLoading,
    madeForYouSongs,
    featuredSongs,
    trendingSongs,
  } = useMusicStore();

  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

  return (
    <div>
      <Topbar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            Good afternoon
          </h1>
          <FeaturedSection />
        </div>
        <div className="space-y-8">
          {/* <SectionGrid
            title="Made For You"
            songs={madeForYouSongs}
            isLoading={isLoading}
          /> */}
          <SectionGrid
            title="Trending"
            songs={trendingSongs}
            isLoading={isLoading}
          />
        </div>
      </ScrollArea>
    </div>
  );
}

export default HomePage;
