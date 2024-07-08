import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import a from "../../../../assets/tundra/a.jpeg";
import b from "../../../../assets/tundra/b.jpeg";
import c from "../../../../assets/tundra/c.jpeg";
import d from "../../../../assets/tundra/d.jpeg";
import e from "../../../../assets/tundra/e.jpeg";
import f from "../../../../assets/tundra/f.jpeg";
import h from "../../../../assets/tundra/h.jpeg";
import i from "../../../../assets/tundra/i.jpeg";
import j from "../../../../assets/tundra/j.jpeg";

const SliderTundra = () => {
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
      original: h,
      thumbnail: h,
    },
    {
      original: i,
      thumbnail: i,
    },
    {
      original: j,
      thumbnail: j,
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

export default SliderTundra;
