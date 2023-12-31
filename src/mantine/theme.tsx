"use client";
import {
  Button,
  Input,
  MantineColorsTuple,
  Select,
  TextInput,
  createTheme,
} from "@mantine/core";

const primaryGreen: MantineColorsTuple = [
  "#f1fbe9",
  "#e4f3da",
  "#cae4b6",
  "#aed58f",
  "#97c86e",
  "#87bf58",
  "#7fbb4d",
  "#6ca53d",
  "#5e9233",
  "#4e7f27",
];

const red: MantineColorsTuple = [
  "#ffe9e6",
  "#ffd3cd",
  "#ffa69c",
  "#fe7566",
  "#fc4c39",
  "#fc321b",
  "#fc230b",
  "#e11500",
  "#c90c00",
  "#b00000",
];

const yellow: MantineColorsTuple = [
  "#fff8e1",
  "#ffefcc",
  "#ffde9b",
  "#ffcb64",
  "#ffbb38",
  "#ffb21b",
  "#ffad09",
  "#e39700",
  "#ca8600",
  "#af7200",
];

const darkBlue: MantineColorsTuple = [
  "#edf5fd",
  "#d8e6f5",
  "#aecced",
  "#7fb1e6",
  "#5b99e0",
  "#468bdd",
  "#3a84dd",
  "#2e71c5",
  "#2465b0",
  "#12579c",
];

export const theme = createTheme({
  colors: {
    green: primaryGreen,
    red: red,
    yellow: yellow,
    darkBlue: darkBlue,
  },
  primaryColor: "green",
  primaryShade: 6,
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "green",
        variant: "filled",
        fw: "normal",
        px: "lg",
      },
    }),
    Input: Input.extend({
      defaultProps: {
        size: "md",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "md",
      },
    }),
    Select: Select.extend({
      defaultProps: {
        size: "md",
      },
    }),
  },
});
