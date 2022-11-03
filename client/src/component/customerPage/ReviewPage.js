import { useState, useEffect } from "react";

import { getReviews } from "../../api/googleApi.js";

import { Box, Text } from "@chakra-ui/react";

import { Avatar, Stack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function ReviewPage() {
  let [apiData, setApiData] = useState(null);

  const getApiData = async () => {
    setApiData(await getReviews());
  };

  useEffect(() => {
    getApiData();
  }, []);

  return apiData ? (
    <>
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
        fontSize="xs"
      >
        Ujire, Karnataka 574240, India
      </Box>

      {apiData.result.reviews.map((author) => {
        return (
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={author.time}
          >
            {" "}
            <Stack spacing={8} direction="row">
              {" "}
              <Box>
                <Avatar
                  mt="1"
                  ml="1"
                  size="md"
                  name={author.author_name}
                  // src="https://bit.ly/ryan-florence"
                  src={author.author_url}
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
                  {author.author_name}
                </Box>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                >
                  {author.relative_time_description}
                </Box>
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < author.rating ? "orange.500" : "gray.300"}
                      />
                    ))}
                </Box>
                <Text>{author.text}</Text>
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
