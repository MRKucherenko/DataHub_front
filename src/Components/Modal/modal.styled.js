import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: auto;
`;

export const ModalBox = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.large};
  padding: ${({ theme }) => theme.space[4]}px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: ${fadeIn} ${({ theme }) => theme.transitions.default};
  min-width: 400px;
  max-width: 600px;
  width: 100%;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space[2]}px;
  right: ${({ theme }) => theme.space[2]}px;
  background: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
`;