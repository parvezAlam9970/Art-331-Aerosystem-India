import React from "react";
import Heading from "@/components/ReUseComp/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryCards from "@/components/ReUseComp/GalleryCards";
import { Images } from "@/constants/images";

const AeroGallery = () => {
  return (
    <di>
      <div className="flex items-center text-center justify-center">
        <Heading isPlane={false}>
          <b>Moments In Motion</b>
        </Heading>
      </div>
      <div className="flex justify-center mt-5">
        <GalleryTabs />
      </div>
    </di>
  );
};

export default AeroGallery;

const cessnaData = [
  { id: 1, name: "CESSNA", title: "Skyhawk", slug: "cessna-skyhawk" },
  { id: 2, name: "CESSNA", title: "Skylane", slug: "cessna-skylane" },
  { id: 3, name: "CESSNA", title: "Turbo Skylane", slug: "cessna-turbo-skylane" },
  { id: 4, name: "CESSNA", title: "Turbo Stationair HD", slug: "cessna-turbo-stationair-hd" },
];

const beechCraftData = [
  { id: 1, name: "BEECHCRAFT", title: "G36 Bonanza", slug: "beechcraft-g36-bonanza" },
  { id: 2, name: "BEECHCRAFT", title: "G58 Baron", slug: "beechcraft-g58-baron" },
];



function GalleryTabs() {
  return (
    <Tabs defaultValue="cessna" className="w-full">
      <div className=" w-full flex justify-center items-center">
        <TabsList className="grid  grid-cols-2 border-[1px]  border-lgrey rounded-none    ">
          <TabsTrigger value="cessna" className=" gap-8 md:px-12 py-2 md:py-3">
            CESSNA
          </TabsTrigger>
          <TabsTrigger value="beechcraft" className=" gap-8 md:px-12 py-2 md:py-3">
            BEECHCRAFT
          </TabsTrigger>
        </TabsList>
      </div>
      <div className="mt-10">
        <TabsContent
          value="cessna"
          className=" grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-16 gap-x-5"
        >
          {cessnaData
            .map((v, indx) => (
              <GalleryCards data={v} key={indx} icons={Images.CESSNA_LOGO} />
            ))}
        </TabsContent>
        <TabsContent
          value="beechcraft"
          className=" grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-5"
        >
          {beechCraftData
            .map((v, indx) => (
              <GalleryCards data={v} key={indx} icons={Images.BEECHCRAFT_LOGO} className=" w-[143px] h-[30px]"/>
            ))}
        </TabsContent>
      </div>
    </Tabs>
  );
}
