"use client";
import { MyButton } from "@/components/common/Button";
import {
  Box,
  Checkbox,
  Group,
  PasswordInput,
  Select,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export function RegisterForm() {
  return (
    <Box className="flex flex-col w-full px-5 items-center   ">
      <SimpleGrid
        cols={{ base: 1, xs: 2, sm: 1, md: 2, lg: 2 }}
        spacing={"md"}
        verticalSpacing={"lg"}
        mb="xl"
      >
        <TextInput placeholder="Name" size="md" />
        <Group gap={0}>
          {" "}
          <Select
            data={["V", "J", "E"]}
            defaultValue={"V"}
            className="w-[4.5rem]"
            radius={"4px 0 0 4px"}
          />
          <TextInput
            radius={"0 4px 4px 0"}
            className="flex-1"
            placeholder="ID Number"
          />{" "}
        </Group>
        <DatePickerInput label="Birth date" size="md" />
        <TextInput placeholder="Residence State" />
        {/*TODO:  use react-imask to format phone */}
        <TextInput placeholder="Phone Number" />

        <TextInput size="md" placeholder="Email" />
        <PasswordInput size="md" placeholder="Password" />
        <PasswordInput size="md" placeholder="Confirm Password" />
        <Checkbox
          my={"auto"}
          styles={{ body: { alignItems: "center", display: "flex" } }}
          label={
            <Text fz={"sm"}>
              I accept this platform&apos;s{" "}
              <Text fz={"sm"} component="span" c={"green"}>
                {" "}
                Terms & conditions{" "}
              </Text>
            </Text>
          }
        />
        <MyButton size="md" fullWidth>
          Create Account
        </MyButton>
      </SimpleGrid>
    </Box>
  );
}
