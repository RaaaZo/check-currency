import { renderHook, act } from '@testing-library/react-hooks';
import { ModalProvider, useModal } from './useModal';

describe('useModal', () => {
  test('should handle open and close modal', () => {
    const wrapper: React.FC = ({ children }) => (
      <ModalProvider>{children}</ModalProvider>
    );

    const { result } = renderHook(() => useModal(), { wrapper });

    act(() => {
      result.current.openModal();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBe(false);
  });
  test('should handle isRemoveAll boolean', () => {
    const wrapper: React.FC = ({ children }) => (
      <ModalProvider>{children}</ModalProvider>
    );

    const { result } = renderHook(() => useModal(), { wrapper });

    act(() => {
      result.current.setIsRemoveAll(true);
    });

    expect(result.current.isRemoveAll).toBe(true);

    act(() => {
      result.current.setIsRemoveAll(false);
    });

    expect(result.current.isRemoveAll).toBe(false);
  });
});
