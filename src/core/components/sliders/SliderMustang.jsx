import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import a from "../../../../assets/mustang/a.jpeg";
import b from "../../../../assets/mustang/b.jpeg";
import c from "../../../../assets/mustang/c.jpeg";
import d from "../../../../assets/mustang/d.jpeg";
import e from "../../../../assets/mustang/e.jpeg";
import f from "../../../../assets/mustang/f.jpeg";

const SliderMustang = () => {
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
    {
      original: f,
      thumbnail: f,
    },
  ];

  return (
    <>
      <ImageGallery
        items={images}
        // showPlayButton={false}
        // showFullscreenButton={false}
        // showThumbnails={false}
        // showNav={false}
        // showBullets={false}
        autoPlay={true}
        slideInterval={5000}
        slideDuration={3000}
        // thumbnailPosition='top'
      />
    </>
  );
};

export default SliderMustang;
