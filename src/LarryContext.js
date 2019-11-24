import React, { useState, useEffect } from "react";
const LarryContext = React.createContext();

const LarryContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        setLoading(false);
      });
  }, []);

  return (
    <LarryContext.Provider value={{ loading, photos }}>
      {children}
    </LarryContext.Provider>
  );
};

export { LarryContextProvider, LarryContext };
