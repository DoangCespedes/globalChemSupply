import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import a from "../../../assets/images/a.jfif";
import b from "../../../assets/images/b.jfif";
import c from "../../../assets/images/d.jfif"
import d from "../../../assets/images/e.jfif"
import e from "../../../assets/images/f.jfif"

const Slider1 = () => {
  const images = [
    {
      original: a,
      thumbnail: a,
    },
    {
      original: b,
      thumbnail: b,
    },
    {
      original: c,
      thumbnail: c,
    },
    {
      original: d,
      thumbnail: d,
    },
    {
      original: e,
      thumbnail: e,
    },
  ];

  return (
    <>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={false}
        showBullets={false}
        autoPlay={true}
        slideInterval={4000}
        slideDuration={3000}
        thumbnailPosition='top'
      />
    </>
  );
};

export default Slider1;
