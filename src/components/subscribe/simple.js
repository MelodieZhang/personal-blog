import React from "react"
import Subscribe from "./mailchimp"
/** @jsx jsx */
import { jsx, Label, Input, Button, Flex, Box, Text, Spinner } from "theme-ui"

const SimpleForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  return (
    <>
      <Flex sx={{ alignItems: "flex-end", flexWrap: "wrap" }}>
        <Box mr="3">
          <Label htmlFor="email">Your email</Label>
          <Input ref={node => (email = node)} type="email" id="email" />
        </Box>
        <Button onClick={submit}>Send me the emails!</Button>
      </Flex>
      <Box mt="2" sx={{ fontSize: 1 }}>
        {status === "sending" && <Spinner />}
        {status === "success" && (
          <Text sx={{ color: "secondary", fontWeight: "bold" }}>{message}</Text>
        )}
        {status === "error" && (
          <div
            sx={{ fontWeight: "bold", color: "headings" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </Box>
    </>
  )
}
// use the render prop and your custom form
export const SimpleSubscribe = () => <Subscribe CustomForm={SimpleForm} />

export default SimpleSubscribe
