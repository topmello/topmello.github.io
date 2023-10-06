
import React from 'react';
import ProdVid from '../../static/vid/product-vid.mp4'

const ProductVideo = () => (
  <video width="720" controls>
    <source src={ProdVid} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default ProductVideo;
