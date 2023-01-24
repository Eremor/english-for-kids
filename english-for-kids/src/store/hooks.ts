import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '.';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;