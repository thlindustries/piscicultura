import React, { useState, useCallback } from 'react';

import {
  Container,
  TooltipText,
  Icon,
  IconButton,
  ContainerButton,
} from './styles';

interface TooltipProps {
  title?: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title }) => {
  const [show, setShow] = useState(false);

  const handleShow = useCallback(() => {
    setShow(true);
  }, []);

  const handleHide = useCallback(() => {
    setShow(false);
  }, []);
  return (
    <>
      <IconButton onPress={handleShow}>
        <Icon name="alert-circle" size={20} />
      </IconButton>
      {show && (
        <ContainerButton onPress={handleHide}>
          <Container show={show}>
            <TooltipText>{title}</TooltipText>
          </Container>
        </ContainerButton>
      )}
    </>
  );
};

export default Tooltip;
