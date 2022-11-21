import { useState, useEffect } from "react";
import { Box, Text, Heading, Container, Stack, Badge } from "@chakra-ui/react";
import Slider from "react-slick";

import { getMealImagesAPI } from "../../api/thirdPartyApi.js";

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
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  textAlign="center"
                  color="white"
                  fontSize="6xl"
                  fontWeight="extrabold"
                >
                  GURUPRASAD
                </Heading>
                <Text textAlign="center" as="i">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    Passionate about good food and service
                  </Badge>
                </Text>
                <Text textAlign="center">
                  <Badge borderRadius="full" px="2" colorScheme="green">
                    Veg Tiffin and meals
                  </Badge>
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  ) : (
    <div>Loading</div>
  );
}

// credit: https://chakra-templates.dev/page-sections/carousels
