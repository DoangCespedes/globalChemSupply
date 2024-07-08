import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import a from "../../../../assets/corolla/a.jpeg";
import b from "../../../../assets/corolla/b.jpeg";
import c from "../../../../assets/corolla/c.jpeg";
import d from "../../../../assets/corolla/d.jpeg";
import e from "../../../../assets/corolla/e.jpeg";
import f from "../../../../assets/corolla/f.jpeg";
import g from "../../../../assets/corolla/g.jpeg";
import h from "../../../../assets/corolla/h.jpeg";
import i from "../../../../assets/corolla/i.jpeg";

const SliderCorolla = () => {
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
    {
      original: g,
      thumbnail: g,
    },
    {
      original: h,
      thumbnail: h,
    },
    {
      original: i,
      thumbnail: i,
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

export default SliderCorolla;
