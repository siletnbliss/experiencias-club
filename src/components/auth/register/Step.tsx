"use client";
import { SimpleStep } from "@/components/common";
import { MyButton } from "@/components/common/Button";
import { SimpleStepper } from "@/components/common/Step/SimpleStep";
import { useSteps } from "@/components/common/Step/useSteps";
import { Box, Button, Divider } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconChevronLeft,
} from "@tabler/icons-react";
import { RegisterForm } from "./Form";

export function RegisterStep() {
  const { step, nextStep, prevStep } = useSteps({ stepLength: 1 });
  return (
    <SimpleStepper className="min-h-52" active={step}>
      <SimpleStep>
        <Box className="flex-col w-full mt-10 px-[20px] lg:px-[100px]  md:px-[80px]">
          <MyButton
            variant="outline"
            fullWidth
            size="md"
            mb={"md"}
            leftSection={<IconBrandGoogle />}
          >
            Sign up with Google
          </MyButton>
          <MyButton
            variant="outline"
            fullWidth
            size="md"
            leftSection={<IconBrandGithub />}
          >
            Sign up with GitHub
          </MyButton>
          <Divider my={"xl"} label={"or"} />
          <MyButton fullWidth size="md" mb={"xl"} onClick={nextStep}>
            Create Account
          </MyButton>
        </Box>
      </SimpleStep>
      <SimpleStep>
        <Button
          leftSection={<IconChevronLeft size={"0.9rem"} />}
          variant="transparent"
          onClick={prevStep}
          mt="md"
          mb="xl"
        >
          {" "}
          Back to start
        </Button>
        <RegisterForm />
      </SimpleStep>
    </SimpleStepper>
  );
}
