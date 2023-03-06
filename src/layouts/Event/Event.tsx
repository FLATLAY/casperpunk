import { useMemo, useState, useEffect } from "react";


// const currentTime = new Date(2023, 2, 8, 21, 30, 0);


const Event = () => {

  const [diffrence, setDiffrence] = useState(
    +new Date(2023, 2, 8, 21, 30, 0) - +new Date()
  );


  const getDay = () => Math.floor(diffrence / (1000 * 60 * 60 * 24));
  const getHourse = () => Math.floor((diffrence / (1000 * 60 * 60)) % 24)
  const getMinutes = () => Math.floor((diffrence / 1000 / 60) % 60);
  const getSeconds = () => Math.floor((diffrence / 1000) % 60);

  const days = useMemo(getDay,[diffrence])
  const hours = useMemo(getHourse,[diffrence])
  const minutes = useMemo(getMinutes,[diffrence])
  const seconds = useMemo(getSeconds,[diffrence])

  useEffect(() => {
    const interval = setInterval(() => {
        setDiffrence( +new Date(2023, 2, 8, 21, 30, 0) - +new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [diffrence]);

  return <></>;
};

export default Event;
