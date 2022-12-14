import { useState, useEffect } from "react";

import { getReviews } from "../../api/thirdPartyApi.js";

import { Box, Text, Avatar, Stack, Divider } from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

function ReviewPage() {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getApiData = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const reviews = await getReviews();
      setApiData(reviews);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, [setApiData]);

  return (
    <>
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h1"
            fontSize="4xl"
            spacing="8"
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
                    color={
                      i < apiData.result.rating ? "orange.500" : "gray.300"
                    }
                  />
                ))}
            </Box>
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {apiData.result.user_ratings_total} reviews
            </Box>
          </Box>

          {/* Mapping*/}

          {apiData.result.reviews.map((review) => {
            return (
              <Box key={review.time}>
                <Box py={6} key={review.time}>
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
                              color={
                                i < review.rating ? "orange.500" : "gray.300"
                              }
                            />
                          ))}
                      </Box>
                      <Text>{review.text}</Text>
                    </Box>
                  </Stack>
                </Box>
                <Divider orientation="horizontal" />
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
}

export default ReviewPage;
