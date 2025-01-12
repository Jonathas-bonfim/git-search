import { Heading } from "@chakra-ui/react";

interface MainTitleProps {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineHeight?: string;
  text: string
}
export function MainTitle({ fontFamily, fontSize, fontWeight, color, text, lineHeight }: MainTitleProps) {
  return (
    <Heading
      fontFamily={fontFamily ?? "'Nunito', sans-serif"}
      fontSize={fontSize ?? '7xl'}
      fontWeight={fontWeight ?? '500'}
      lineHeight={lineHeight ?? 'initial'}
      color={color ?? 'gray'}
    >
      {text}
    </Heading>
  )
}