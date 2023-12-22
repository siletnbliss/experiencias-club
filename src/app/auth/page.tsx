import { AuthWrapper } from "@/components/auth/Wrapper";
import { LoginForm } from "@/components/auth/login/Form";
import { Box } from "@mantine/core";
import vector from "@/assets/auth/discount1.png";
function Auth() {
  return (
    <Box className="flex">
      <AuthWrapper
        vector={{ src: vector, props: { className: "ml-auto" } }}
        contentPosition="left"
        title="Sign In"
      >
        <LoginForm />
      </AuthWrapper>
      <Box></Box>
    </Box>
  );
}

export default Auth;
