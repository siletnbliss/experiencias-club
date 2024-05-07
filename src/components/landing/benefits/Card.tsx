import { Glass } from "@/components/common/Glass/Glass";
import { AspectRatio, Box, Text } from "@mantine/core";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
}
export const BenefitCard = ({ title, img }: Props) => {
  return (
    <Box className="w-full mx-auto h-auto" maw={"20rem"} mah={"20rem"}>
      <Glass>
        <AspectRatio ratio={1}>
          <Image
            className=" max-h-72 p-10 sm:p-2  lg:p-5"
            src={img}
            alt={title}
          />
        </AspectRatio>
      </Glass>
      <Text fz={"lg"} fw={500} c={"dark"} ta={"center"} mt="xl">
        {title}
      </Text>
    </Box>
  );
};
