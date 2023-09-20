import React, {
  createContext, useCallback, useContext, useMemo, useState
} from 'react';

const HomeContext = createContext({});

export function HomeProvider({ children }) {
  const [iFrame, setIframe] = useState(0);
  const [iFrameKey, setIFrameKey] = useState(0);
  const [loading, setLoading] = useState(false);

  const changeIframe = useCallback((iframe) => {
    if (iframe === iFrame) {
      setIFrameKey(iFrameKey + 1);
    } else {
      setIframe(iframe);
    }
    setLoading(true);

  }, [iFrame, iFrameKey]);

  const value = useMemo(() => ({
    setIframe,
    iFrame,
    loading,
    setLoading,
    changeIframe,
    iFrameKey,
  }), [
    setIframe,
    iFrame,
    loading,
    setLoading,
    changeIframe,
    iFrameKey,
  ]);

  return (
    <HomeContext.Provider
      value={value}
    >
      {children}
    </HomeContext.Provider>
  );
}

export const useHome = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHome must be used with HomeContext');
  }

  return context;
};
