import { Card, Container, Grid, GridCol, Text, Title } from "@mantine/core";
import mailImg from "@/assets/landing/newsletter/mail.png";
import Image from "next/image";
import { NewsletterForm } from "./Form";
import { Circle } from "@/components/common/Circle";

export const NewsletterCard = () => {
  return (
    <Container size={"lg"} className="relative">
      <Image
        className="absolute shadow-md -top-10 right-1/2 z-10 translate-x-1/2"
        height={80}
        src={mailImg}
        alt="mail"
      />
      <Card
        bg={"gray.2"}
        pl={{ base: "xl", md: "4rem" }}
        pr={{ base: "xl", md: "3rem" }}
        py="3.5rem"
        radius={"31px"}
      >
        <Grid gutter={{ base: "1rem", md: "4rem" }} align="center">
          <GridCol span={{ base: 12, md: 5 }}>
            <Title size={"h1"} mb={"sm"}>
              Closer to you
            </Title>
            <Text size="lg" ta={{ xs: "center", md: "left" }}>
              Enter your email to obtain information about all the special sales
              made for you in
              <b> Experiencias Club.</b>{" "}
            </Text>
          </GridCol>
          <GridCol span={{ base: 12, md: 7 }}>
            <NewsletterForm />
          </GridCol>
        </Grid>
      </Card>
      <Circle
        size={"250px"}
        pos={"absolute"}
        className="-z-10"
        right={"-60px"}
        top={"80px"}
        visibleFrom="md"
      />
    </Container>
  );
};
