import { Textarea, extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins'
import { buttonTheme, dividerTheme } from "./Components";

const theme = extendTheme({
    fonts: {
        heading: `'CocogooseBold', Helvetica`,
        body: `'Poppins', sans-serif`,
    },
    colors: {
        bg: {
            1000: "#BDBDBD",
            900: "#717171",
            800: "#717171",
            700: "#555555",
            600: "#444444",
            500: "#363636",
            400: "#2B2B2B",
            350: "#202020",
            300: "#1D1D1D",
            200: "#101010",
            100: "#000000",
        },
        textcol: {
            normal:"#FFFFFF",
            link:"#E90000",
        },
        highlight: {
            500: "#C20000",
            400: "#6A0000",
            300: "#5b0000",
            200: "#3B0000",
            100: "#290000",
        }
    },
    breakpoints: {
        xxl: "100em",
        xxxl: "160em",
        xxxxl: "180em"
    },
    components: {
        Button: buttonTheme,
        Divider: dividerTheme,
        Select: {
            baseStyle: {
              field: {
                background: 'bg.400', // Background color for the select field
                color: 'white', // Text color for the select field
              },
            },
            variants: {
              filled: {
                field: {
                  background: 'bg.400', // Background color for the select field
                  _hover: {
                    background: 'bg.500', // Hover background color for the select field
                  },
                },
              },
            },
          },
        Input: {
            baseStyle: {
              field: {
                background: 'bg.400', // Background color for the select field
                color: 'white', // Text color for the select field
              },
            },
            variants: {
              filled: {
                field: {
                  background: 'bg.400', // Background color for the select field
                  _hover: {
                    background: 'bg.500', // Hover background color for the select field
                  },
                },
              },
            },
          },
          Textarea: {
            baseStyle: {
              field: {
                background: 'bg.400', // Background color for the select field
                color: 'white', // Text color for the select field
              },
            },
            variants: {
              filled: {
                  background: 'bg.400', // Background color for the select field
                  _hover: {
                    background: 'bg.600', // Hover background color for the select field
                  },
              },
            },
          },
        
    },
})

export default theme