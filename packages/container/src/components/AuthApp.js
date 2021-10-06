import React, { useRef, useEffect } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  const { pathname } = history.location;

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
