import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Center,
} from "@mantine/core";
import image from "@/assets/error.jpg";
import classes from "./NotFound.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <Center mih={"100vh"}>
      <Container className={classes.root}>
        <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
          <Image alt="error" src={image.src} className={classes.mobileImage} />
          <div>
            <Title className={classes.title}>Something is not right...</Title>
            <Text c="dimmed" size="lg">
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </Text>
            <Link href={"/"}>
              <Button
                variant="outline"
                size="md"
                mt="xl"
                className={classes.control}
              >
                Get back to home page
              </Button>
            </Link>
          </div>
          <Image alt="error" src={image.src} className={classes.desktopImage} />
        </SimpleGrid>
      </Container>
    </Center>
  );
}
