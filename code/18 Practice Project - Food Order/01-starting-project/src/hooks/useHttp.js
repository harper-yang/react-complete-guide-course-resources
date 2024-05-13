import {useCallback, useEffect, useState} from "react";

const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong, failed to send request");
  }

  return data;
}

export const useHttp = (url, config, initialData) => {

  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(async (payload) => {
    setIsLoading(true);
    try {
      const data = await sendHttpRequest(url, {...config, body: payload});
      setData(data);
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
    if (config && (config.method === "GET" || !config.method) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  const clearData = () => {
    setData(initialData);
  }

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData
  }
}
