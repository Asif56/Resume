import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css";

export default function ImageGallery({ image }) {
  const imageList = image.map((ima) => {
    return {
      original: ima,
      thumbnail: ima,
    };
  });
  return (
    <div>
      <Gallery
        items={imageList}
        autoPlay={true}
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets
      />
    </div>
  );
}
