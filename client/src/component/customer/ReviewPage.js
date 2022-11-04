import { useState, useEffect } from "react";

import { getReviews } from "../../api/googleApi.js";

import { Box, Text } from "@chakra-ui/react";

import { Avatar, Stack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function ReviewPage() {
  const [apiData, setApiData] = useState(null);

  const getApiData = async () => {
    setApiData(await getReviews());
  };

  useEffect(() => {
    getApiData();
  }, []);

  return apiData ? (
    <>
      <div>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          fontSize="4xl"
          // lineHeight="tight"
          noOfLines={1}
        >
          Hotel GURUPRASAD
        </Box>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="md"
        >
          Ujire, Karnataka 574240, India
        </Box>
        <Box display="flex" alignItems="baseline">
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < apiData.result.rating ? "orange.500" : "gray.300"}
                />
              ))}
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {apiData.result.user_ratings_total} reviews
          </Box>
        </Box>
      </div>
      {/* Mapping*/}

      {apiData.result.reviews.map((review) => {
        return (
          <Box
            py={6}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={review.time}
          >
            {" "}
            <Stack spacing={8} direction="row">
              {" "}
              <Box>
                <Avatar
                  mt="1"
                  ml="1"
                  size="md"
                  name={review.author_name}
                  src={review.author_url}
                />{" "}
              </Box>{" "}
              <Box>
                {" "}
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {review.author_name}
                </Box>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                >
                  {review.relative_time_description}
                </Box>
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < review.rating ? "orange.500" : "gray.300"}
                      />
                    ))}
                </Box>
                <Text>{review.text}</Text>
              </Box>
            </Stack>
          </Box>
        );
      })}
    </>
  ) : (
    <Text>Loading.....</Text>
  );
}

export default ReviewPage;
