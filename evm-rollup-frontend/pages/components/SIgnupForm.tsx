import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormHelperText, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import * as EmailValidator from "email-validator";

export default function SignupForm() {
  const formStyle = {
    background: "white",
    padding: "50px",
    borderRadius: 20,
    maxWidth: "545px",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = () => {
    const isEmailValid = EmailValidator.validate(email);

    if (!isEmailValid) {
      setErrorMessage("Email is not valid.");
    } else {
      // to be finished after setting up CRM
      setErrorMessage("");
      setName("");
      setEmail("");
      console.log("submit the form");
    }
  };

  return (
    <Box sx={formStyle}>
      <Text fontSize={36} fontWeight={450}>
        Be a part of this journey
      </Text>
      <Text>
        Provide your email to be among the first to experience the full power of
        Etherlink when it launches.
      </Text>
      <FormControl>
        <Input
          bg="#F4F4EA"
          mb="15px"
          mt="10px"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          type="email"
          bg="#F4F4EA"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {!!errorMessage.length && (
          <Text fontSize={12} color="red">
            {errorMessage}
          </Text>
        )}
        <Button
          mt="35px"
          mb="35px"
          w="100%"
          colorScheme="messenger"
          onClick={submit}
          isDisabled={!name.length || !email.length}
        >
          Sign up
        </Button>
        <FormHelperText>
          Note: We respect your privacy and promise not to share your
          information with third parties.
        </FormHelperText>
      </FormControl>
    </Box>
  );
}
