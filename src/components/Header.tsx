import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { logOut } from '../api';
import useUser from '../lib/useUser';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue('red.500', 'red.300');
  const Icon = useColorModeValue(FaMoon, FaSun);
  const toast = useToast();
  const onLogOut = async () => {
    const toastId = toast({
      title: 'Login out...',
      description: 'Sad to see you go...',
      status: 'loading',
      position: 'bottom-right',
    });
    // const data = await logOut();
    // console.log(data);
    setTimeout(() => {
      toast.update(toastId, {
        title: 'Done!',
        description: 'See you later!',
        status: 'success',
      });
    }, 5000);
  };

  return (
    <Stack
      py={5}
      px={40}
      borderBottomWidth={'1px'}
      justifyContent={'space-between'}
      direction={{
        sm: 'column',
        md: 'row',
      }}
      alignItems={'center'}
      spacing={{
        sm: 4,
        md: 0,
      }}
    >
      <Box color={logoColor}>
        <Link to={'/'}>
          <FaAirbnb size={48} />
        </Link>
      </Box>

      <HStack spacing={2}>
        <IconButton
          onClick={toggleColorMode}
          aria-label="Toggle dark mode"
          icon={<Icon />}
          variant={'ghost'}
        />
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Log in</Button>
              <LightMode>
                <Button onClick={onSignUpOpen} colorScheme={'red'}>
                  Sign up
                </Button>
              </LightMode>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar name={user?.name} src={user?.avatar} size={'md'} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogOut}>Log out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </Stack>
  );
}
