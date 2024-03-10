import React, { useState } from "react";
import { Box, Checkbox, CheckboxGroup, Flex, FormControl, FormLabel, Heading, Input, Stack, Textarea, Button, VStack, Text } from "@chakra-ui/react";
import { FaLightbulb, FaHandshake, FaRocket, FaPlus } from "react-icons/fa";

const categories = {
  "Technology & Innovation": [],
  "Health & Wellness": [],
  "Education & Learning": [],
  "Environment & Sustainability": [],
  "Arts & Entertainment": [],
  "Productivity & Business Solutions": [],
  "Social Impact & Community": [],
  "Science & Research": [],
  "Consumer Goods & Services": [],
  "Finance & Fintech": [],
  "Transportation & Mobility": [],
  "Food & Agriculture": [],
  "Sports & Recreation": [],
  "Fashion & Lifestyle": [],
  "Travel & Hospitality": [],
  Other: [],
};

const Index = () => {
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [otherCategoryDescription, setOtherCategoryDescription] = useState("");

  const handleToggleCategory = (category) => {
    const newSelectedCategories = new Set(selectedCategories);
    if (newSelectedCategories.has(category)) {
      newSelectedCategories.delete(category);
      if (category === "Other") setOtherCategoryDescription("");
    } else {
      newSelectedCategories.add(category);
    }
    setSelectedCategories(newSelectedCategories);
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
      <Box bgImage="https://images.unsplash.com/photo-1686087350079-9f6ca138583c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aXNpb25hcnklMjBpZGVhc3xlbnwwfHx8fDE3MTAwMzg3NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" w="full" h="100vh" position="relative">
        <VStack spacing={4} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#0044cc" fontWeight="700" fontSize="18px">
          <Heading>Share Your Visionary Ideas</Heading>
          <Text>Collaborate and connect with resources to bring your game-changing ideas to life.</Text>
          <FormControl>
            <FormLabel htmlFor="idea-description">Describe your idea</FormLabel>
            <Textarea id="idea-description" placeholder="What's your visionary idea?" />
          </FormControl>
          <CheckboxGroup colorScheme="blue">
            <Stack spacing={[1, 5]} direction={["column", "row"]} wrap="wrap">
              {Object.keys(categories).map((category) => (
                <Checkbox key={category} isChecked={selectedCategories.has(category)} onChange={() => handleToggleCategory(category)}>
                  {category}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          {selectedCategories.has("Other") && <Input placeholder="Please specify your category" value={otherCategoryDescription} onChange={(e) => setOtherCategoryDescription(e.target.value)} />}
          <Button rightIcon={<FaRocket />} colorScheme="blue" variant="solid">
            Launch Idea <FaPlus />
          </Button>
        </VStack>
        <Flex position="absolute" bottom="0" w="full" justify="center" pb={4} color="#0044cc">
          <FaLightbulb />
          <FaHandshake />
          <FaRocket />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
