import { createContext, useContext } from "react";

//client configuration
const PreloadContext = createContext(null);
export default PreloadContext;

//resolve
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null; //when there is no context, then do nothing
  if (preloadContext.done) return null; //when the job is done, then do nothing
  //register as a promise to the array of the promise to treat the context as promise
  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};
