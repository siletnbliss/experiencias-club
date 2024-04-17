import { Box, Card, Title, Group, Rating, Button, Text } from "@mantine/core";

interface Props {
  title: string;
  rating: number;
}

export const RestaurantCard = ({ title, rating }: Props) => {
  return (
    <Card
      pt={"4rem"}
      pb={"5rem"}
      pl={{ xs: "1rem", sm: "2rem" }}
      pr={{ xs: "1rem", sm: "4rem" }}
      bg={"red.4"}
      c={"white"}
      mih={"100%"}
    >
      <Box
        w={"fit-content"}
        px={"8px"}
        py={"4px"}
        mb="4px"
        style={{ border: "1px solid white", borderRadius: "20px" }}
      >
        <Text>Introducing:</Text>
      </Box>
      <Title
        ta={{ xs: "center", md: "left" }}
        mb={"3.5rem"}
        fz={{ xs: "5em", lg: "6em" }}
        lh={{ xs: "lg", md: "xl", lg: "100px" }}
      >
        {title}
      </Title>
      <Group justify="space-between">
        <Rating color="dark" readOnly value={rating} />
        <Button size="compact-lg" color="dark">
          Visit them
        </Button>
      </Group>
    </Card>
  );
};
