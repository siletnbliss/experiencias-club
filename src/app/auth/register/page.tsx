import { AuthWrapper } from "@/components/auth/Wrapper";
import { Box, Text } from "@mantine/core";
import vector from "@/assets/auth/discount2.png";
import { RegisterStep } from "@/components/auth/register/Step";
import Link from "next/link";
function Auth() {
  return (
    <Box className="flex">
      <AuthWrapper
        vector={{
          src: vector,
          props: {
            className: "mr-auto ",
          },
        }}
        contentPosition="right"
        title="Sign Up"
      >
        <RegisterStep />
        <Text fz="sm">
          {" "}
          Already have an account?{" "}
          <Link href={"/auth"}>
            <Text fw={500} component="span" c="green">
              Sign in
            </Text>{" "}
          </Link>
        </Text>
      </AuthWrapper>
      <Box></Box>
    </Box>
  );
}

export default Auth;
