"use client";
import { MyButton } from "@/components/common/Button";
import { Box, Divider, PasswordInput, Text, TextInput } from "@mantine/core";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";

export function LoginForm() {
  return (
    <Box className="flex flex-col w-full mt-10 px-[20px]  lg:px-[100px]  md:px-[40px]">
      <TextInput size="md" mb="lg" placeholder="Email" />
      <PasswordInput mb={"sm"} size="md" placeholder="Password" />
      <Text c={"gray.5"} fz={"sm"} ta={"right"}>
        {" "}
        Forgot password?
      </Text>
      <MyButton fullWidth size="md" my="xl">
        Log in
      </MyButton>

      <Text fz="sm">
        {" "}
        Don&apos;t have an account?{" "}
        <Link href={"/auth/register"}>
          <Text fw={500} component="span" c="green">
            Register
          </Text>{" "}
        </Link>
      </Text>
      <Divider my={"xl"} label={"or"} />
      <MyButton
        variant="outline"
        fullWidth
        size="md"
        mb={"md"}
        leftSection={<IconBrandGoogle />}
      >
        Sign in with Google
      </MyButton>
      <MyButton
        variant="outline"
        fullWidth
        size="md"
        mb={"xl"}
        leftSection={<IconBrandGithub />}
      >
        Sign in with GitHub
      </MyButton>
    </Box>
  );
}
