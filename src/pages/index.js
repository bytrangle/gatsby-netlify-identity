import React from "react";
import { Container, Heading, Button, Flex } from "theme-ui";

export default (props) => (
  <Container sx={{ padding: 4 }}>
    <Heading as="h1">Get nothing done</Heading>
    <Flex sx={{ marginTop: 2 }}>
      <Button sx={{ marginRight: "1rem" }}>Log in</Button>
      <Button>Register</Button>
    </Flex>
  </Container>
);
