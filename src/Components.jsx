import { defineCssVars, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const xl = defineStyle({
    fontSize: '2rem',
    px: '6',
    h: '16',
    borderRadius: 'md',
})


export const buttonTheme = defineStyleConfig({
    sizes: { xl },
})

const thick = defineStyle({
    borderWidth: '5px'
})

export const dividerTheme = defineStyleConfig({
    variants: { thick }
})