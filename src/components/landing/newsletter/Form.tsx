import { ActionIcon, Button, TextInput } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const FormButton = () => (
  <>
    <ActionIcon
      className="rounded-r-md"
      color="secondGreen.9"
      size={"100%"}
      w={"2.5rem"}
      hiddenFrom="md"
      variant=""
    >
      <IconArrowRight />
    </ActionIcon>
    <Button visibleFrom="md" radius={"md"} color="secondGreen.9">
      Subscribe
    </Button>
  </>
);
export const NewsletterForm = () => {
  return (
    <>
      <TextInput
        placeholder="   Enter your email"
        size="md"
        rightSectionWidth={"fit-content"}
        rightSection={<FormButton />}
      ></TextInput>
    </>
  );
};
