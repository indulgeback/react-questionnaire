import { useEffect, useRef } from "react";
import "notyf/notyf.min.css"; // for React, Vue and Svelte
import { Notyf } from "notyf";

const useNotyf = () => {
  const notyfRef = useRef<Notyf | null>(null);

  useEffect(() => {
    if (!notyfRef.current) {
      notyfRef.current = new Notyf({
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
    }
  }, []);

  const showSuccess = (message: string) => {
    if (notyfRef.current) {
      notyfRef.current.success(message);
    }
  };

  const showError = (message: string) => {
    if (notyfRef.current) {
      notyfRef.current.error(message);
    }
  };

  return {
    showSuccess,
    showError
  };
};

export default useNotyf;
