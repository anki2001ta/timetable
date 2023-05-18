/** importing libraries **/
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

/** importing dependencies **/
import { AppDispatch, RootState } from "../redux/store";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
