import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
  ThemingProps,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill, BsX } from 'react-icons/bs';

export interface IInputProps extends ChakraInputProps {
  hideable?: boolean;
  clearable?: boolean;
  label?: string;
  helperText?: string;
  size?: ThemingProps<'Input'>['size'];
}

export const Input = forwardRef<IInputProps, 'input'>(
  ({ hideable = false, clearable = false, size = 'md', label, helperText, ...rest }, ref) => {
    const [show, setShow] = useState<boolean>(true);
    const toggleHideable = () => setShow(!show);

    const [value, setValue] = useState<string>('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <InputGroup size={size}>
          <ChakraInput
            {...rest}
            px={2}
            type={show ? 'text' : 'password'}
            zIndex={1}
            size={size}
            value={value}
            onChange={onChange}
            ref={ref}
          />
          <InputRightElement display='flex' mr={2} gridGap={0.5} w='auto'>
            {clearable && (
              <Box as='button' type='button' aria-label='clear field' onClick={() => setValue('')}>
                <BsX />
              </Box>
            )}

            {hideable && (
              <Box as='button' type='button' aria-label='show field' onClick={toggleHideable}>
                {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </Box>
            )}
          </InputRightElement>
        </InputGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  },
);
