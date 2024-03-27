import { Stack } from "@mantine/core";
import { NewsletterCard } from "../../components/landing/newsletter/Card";

export default function Home() {
  return (
    <Stack my="4rem" gap="xl">
      <NewsletterCard />
    </Stack>
  );
}
