import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

import { getMealImagesAPI } from "../../api/googleApi";

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [mealDBimages, setMealDBImages] = useState([]);

  const cards = mealDBimages.meals;

  // Fetching Data
  useEffect(() => {
    const makeImageRequest = async () => {
      setMealDBImages(await getMealImagesAPI());
    };

    makeImageRequest();
  }, []);

  return cards ? (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            // cover, that scales an image to fill the container completely without cropping too much area of the image:
            backgroundSize="cover"
            backgroundImage={`url(${url.strMealThumb})`}
          />
        ))}
      </Slider>
    </Box>
  ) : (
    <div>Loading</div>
  );
}

// credit: https://chakra-templates.dev/page-sections/carousels
