import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isAtive:boolean;
  startCountdown:()=>void;
  resetCountdown:()=>void;
}

interface CountdownProviderProps{
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;


export function CountdownProvider({children}: CountdownProviderProps){
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isAtive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;


  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isAtive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isAtive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isAtive, time])
  
  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isAtive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}