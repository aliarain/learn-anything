import { Box, Text, Button } from "@chakra-ui/core"
import removeLink from "app/auth/mutations/removeLink"

// flag to show full, only host url
export const Link = ({ link }) => {
  return (
    <Box w="fit-content" p={1} mb={1} rounded="md" borderWidth="2px" border="text-gray-600">
      <Text>{link.title}</Text>
      <Text as="a" href={link.url} className="text-gray-600" fontSize="sm">
        {link.url}
      </Text>
      <Button onClick={() => removeLink({ id: link.id })}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
          ></path>
        </svg>
      </Button>
    </Box>
  )
}
