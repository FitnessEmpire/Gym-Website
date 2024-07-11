import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import gymImage1 from "../assets/Gym_1.jpg";
import gymImage2 from "../assets/Gym_2.jpg";
import gymImage3 from "../assets/Gym_3.jpg";
import gymImage4 from "../assets/Gym_4.jpg";
import Gallery1 from "../assets/Gallery1.jpg";
import Gallery2 from "../assets/gallery2.jpg";
import Gallery3 from "../assets/Gallery3.jpg";
import Gallery4 from "../assets/Gallery4.jpg";
import Gallery5 from "../assets/Gallery5.jpg";
import Gallery6 from "../assets/gallery6.jpg";
import Gallery7 from "../assets/gallery7.jpg";
import Gallery9 from "../assets/gallery9.jpg";
import Gallery10 from "../assets/gallery10.jpg";
import Gallery8 from "../assets/gallery8.jpg";
import Gallery11 from "../assets/gallery11.jpg";
import Gallery12 from "../assets/gallery12.jpg";
import Gallery13 from "../assets/gallery13.jpg";
import Gallery14 from "../assets/gallery14.jpg";
import Gallery15 from "../assets/gallery15.jpg";
import Gallery16 from "../assets/gallery16.jpg";
import Gallery17 from "../assets/gallery17.jpg";
import gymVideo1 from "../assets/GYM.mp4";
import gymVideo2 from "../assets/Video_2.MOV";
import gymVideo3 from "../assets/GymVideo.mp4";
import gymVideo4 from "../assets/GymVideo1.mp4";
import gymVideo5 from "../assets/GymVideo2.mp4";
import gymVideo6 from "../assets/GymVideo3.mp4";
import gymVideo7 from "../assets/GymVideo4.mp4";
import H1 from "../reusable/H1";
import WithBarTitle from "../reusable/WithBarTitle";
import bg from "../assets/Gym_bg.jpg";

const GalleryContainer = styled.div`
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const MediaItem = styled.div`
  cursor: pointer;
  overflow: hidden;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

const Box = styled.div`
  width: 100%;
`;

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90vh",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  return (
    <GalleryContainer>
      <InnerContainer>
        <Box>
          <WithBarTitle title="Fitness Empire" />
          <Header>
            <H1 style={{ width: "100%", fontSize: 30, color: "black" }}>Gym Gallery</H1>
          </Header>
          <MediaGrid>
            <MediaItem onClick={() => openModal(<Image src={gymImage1} alt="Gym Image 1" />)}>
              <Image src={gymImage1} alt="Gym Image 1" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={gymImage2} alt="Gym Image 2" />)}>
              <Image src={gymImage2} alt="Gym Image 2" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={gymImage3} alt="Gym Image 3" />)}>
              <Image src={gymImage3} alt="Gym Image 3" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={gymImage4} alt="Gym Image 4" />)}>
              <Image src={gymImage4} alt="Gym Image 4" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery1} alt="Gallery Image 1" />)}>
              <Image src={Gallery1} alt="Gallery Image 1" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery2} alt="Gallery Image 2" />)}>
              <Image src={Gallery2} alt="Gallery Image 2" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery3} alt="Gallery Image 3" />)}>
              <Image src={Gallery3} alt="Gallery Image 3" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery4} alt="Gallery Image 4" />)}>
              <Image src={Gallery4} alt="Gallery Image 4" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery5} alt="Gallery Image 5" />)}>
              <Image src={Gallery5} alt="Gallery Image 5" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery6} alt="Gallery Image 6" />)}>
              <Image src={Gallery6} alt="Gallery Image 6" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery7} alt="Gallery Image 7" />)}>
              <Image src={Gallery7} alt="Gallery Image 7" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery8} alt="Gallery Image 8" />)}>
              <Image src={Gallery8} alt="Gallery Image 8" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery9} alt="Gallery Image 9" />)}>
              <Image src={Gallery9} alt="Gallery Image 9" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery10} alt="Gallery Image 10" />)}>
              <Image src={Gallery10} alt="Gallery Image 10" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery11} alt="Gallery Image 11" />)}>
              <Image src={Gallery11} alt="Gallery Image 11" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery12} alt="Gallery Image 12" />)}>
              <Image src={Gallery12} alt="Gallery Image 12" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery13} alt="Gallery Image 13" />)}>
              <Image src={Gallery13} alt="Gallery Image 13" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery14} alt="Gallery Image 14" />)}>
              <Image src={Gallery14} alt="Gallery Image 14" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery15} alt="Gallery Image 15" />)}>
              <Image src={Gallery15} alt="Gallery Image 15" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery16} alt="Gallery Image 16" />)}>
              <Image src={Gallery16} alt="Gallery Image 16" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Image src={Gallery17} alt="Gallery Image 17" />)}>
              <Image src={Gallery17} alt="Gallery Image 17" />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Video src={gymVideo1} controls />)}>
              <Video src={gymVideo1} />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Video src={gymVideo2} controls />)}>
              <Video src={gymVideo2} />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Video src={gymVideo3} controls />)}>
              <Video src={gymVideo3} />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Video src={gymVideo4} controls />)}>
              <Video src={gymVideo4} />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Video src={gymVideo5} controls />)}>
              <Video src={gymVideo5} />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Video src={gymVideo6} controls />)}>
              <Video src={gymVideo6} />
            </MediaItem>
            <MediaItem onClick={() => openModal(<Video src={gymVideo7} controls />)}>
              <Video src={gymVideo7} />
            </MediaItem>
          </MediaGrid>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
            contentLabel="Media Modal"
          >
            {modalContent}
          </Modal>
        </Box>
      </InnerContainer>
    </GalleryContainer>
  );
}
