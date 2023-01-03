import {
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

export default function Header() {
  const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
  const { isOpen: isSignUpOpen, onClose: onSignUpClose, onOpen: onSignUpOpen } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue('red.500', 'red.300');
  const Icon = useColorModeValue(FaMoon, FaSun);

  return (
    <HStack py={5} px={10} borderBottomWidth={'1px'} justifyContent={'space-between'}>
      <Box color={logoColor}>
        <Link to={'/'}>
          <FaAirbnb size={48} />
        </Link>
      </Box>

      <HStack spacing={2}>
        <IconButton onClick={toggleColorMode} aria-label="Toggle dark mode" icon={<Icon />} variant={'ghost'} />
        <Button onClick={onLoginOpen}>Log in</Button>
        <LightMode>
          <Button onClick={onSignUpOpen} colorScheme={'red'}>
            Sign up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
