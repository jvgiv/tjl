import React, { useState, useCallback } from "react";
import { Parallax } from "react-parallax";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import gallerypic from "../images/random-filler/runway editoral .jpg";
import photos from "../images/photos";

const Gallery1 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [modalIsOpen, setModalOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setModalOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <Parallax bgImage={gallerypic} strength={500}>
          <div className="parallax-bg">
            {/* <h2 className='parallax-h1'>Masters of Style.</h2> */}
          </div>
        </Parallax>
        <h3 className="gallery-h3">Gallery</h3>
        <Gallery
          style={{ marginTop: 10 }}
          photos={photos}
          direction={"row"}
          onClick={openLightbox}
        />

        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                lazyLoad={true}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Gallery1;
