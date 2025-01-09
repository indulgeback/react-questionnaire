import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // for React, Vue and Svelte

const useNotyf = () => {
  // Create an instance of Notyf
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "center",
      y: "top"
    },
    types: [
      {
        type: "warning",
        background: "orange",
        icon: {
          className: "material-icons",
          tagName: "i",
          text: "warning"
        }
      },
      {
        type: "error",
        background: "indianred",
        duration: 2000,
        dismissible: true
      }
    ]
  });

  const showScuccess = (message: string) => {
    notyf.success(message);
  };
  const showError = (message: string) => {
    notyf.error(message);
  };

  return {
    showScuccess,
    showError
  };
};

export default useNotyf;
