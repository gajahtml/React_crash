import GalleryCard from "./GalleryCard";
import gData from "./GalleryCard.json";

export default function GalleryMain() {
  console.log(gData.galSearchKeyword);

  const imgUrl = gData.galWebImageUrl;
  const title = gData.galTitle;
  const pLocation = gData.galPhotographyLocation;
  let kTag = gData.galSearchKeyword;

  return (
      <GalleryCard
        imgUrl={imgUrl}
        title={title}
        pLocation={pLocation}
        kTag={kTag}
      />    
  );
}
