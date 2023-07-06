import { Box, Text } from "@chakra-ui/react";

function ModalBox({ title, paragraph }: { title: string; paragraph: string }) {
  const style = {
    borderRadius: "20px",
    background: "#FFF",
    boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(87px)",
  };

  return (
    <Box
      width={{ base: "288px", md: "350px", xl: "430px" }}
      p={{ base: "32px 20px", xl: "40px" }}
      sx={style}
    >
      <Text fontSize={{ base: "20px", xl: "24px" }} fontWeight={700} mb="5px">
        {title}
      </Text>
      <Text fontSize="16px">{paragraph}</Text>
    </Box>
  );
}

export default ModalBox;
