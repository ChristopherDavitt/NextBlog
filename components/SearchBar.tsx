import { Button, Kbd } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"
import withStyle from "../utils/withStyle"

const SearchButton = withStyle(Button, {
  borderRadius: '8px',
  justifyContent: 'flex-start',
  bg: 'bgLight',
  color: 'cma.gray',
  width: '100%',
  maxWidth: '400px',
  border: '1px solid',
  borderColor: 'cma.gray',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  paddingX: '1rem',
  marginLeft: '3rem',
  marginRight: '1rem',
  boxShadow: 'md',
  fontWeight: 'lighter',
  _hover: {
    bg: 'bgLight'
  },
  cursor: 'pointer',
})

const SearchBar = () => {
  return (
    <SearchButton leftIcon={<FaSearch />}>
      <p>Search</p>
    </SearchButton>
  )
}
export default SearchBar;
