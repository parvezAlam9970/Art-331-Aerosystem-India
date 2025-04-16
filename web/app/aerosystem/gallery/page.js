import React from "react";
import Container from "@/components/custom/Container";
import BreadCrumb from "@/components/ReUseComp/BreadCrumb";
import AeroGallery from "@/components/aerosystem/gallery/AeroGallery";

const MediaGalleryPage = () => {
  return (
    <div>
      <BreadCrumb title="Media Gallery" subtitle="Aerosystems" />
      <Container className="my-10 md:my-10 lg:my-16">
        <AeroGallery/>
      </Container>
    </div>
  );
};

export default MediaGalleryPage;

