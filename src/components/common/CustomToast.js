
import { Slide, toast } from "react-toastify";
export const errorToast = ({ message, position }) => {
  return toast.error(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    className: " dark:bg-backgroundDark dark:text-white",
  });
};

export const infoToast = ({ message, position }) => {
  return toast.info(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    className: " dark:bg-backgroundDark dark:text-white",
  });
};

export const successToast = ({ message, position }) => {
  return toast.success(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    className: " dark:bg-backgroundDark dark:text-white",
  });
};
