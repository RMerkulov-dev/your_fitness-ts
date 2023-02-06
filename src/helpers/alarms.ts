import { toast } from "react-toastify";

export const showToastMessage = () => {
  toast.success("Train added", {
    position: toast.POSITION.TOP_CENTER,
    style: { background: "rgba(254,243,199,0.73)" },
  });
};
export const showDeletedMessage = () => {
  toast.success("Train deleted", {
    position: toast.POSITION.TOP_CENTER,
    style: { background: "rgb(254 243 199)" },
  });
};

export const showAlertMessage = () => {
  toast.error("Please add your train", {
    position: toast.POSITION.TOP_CENTER,
    style: { background: "rgb(254 243 199)" },
  });
};
