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
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [, setSlider] = useState("");
  const [mealDBimages, setMealDBImages] = useState([]);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes

  const cards = mealDBimages.meals;
  console.log(cards);

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
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"6xl"}
            // maxHeight="50%"
            // maxHeight="50%"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url.strMealThumb})`}
            // {url.strMealThumb}
          />
        ))}
      </Slider>
    </Box>
  ) : (
    <div>Loading</div>
  );
}

// credit: https://chakra-templates.dev/page-sections/carousels