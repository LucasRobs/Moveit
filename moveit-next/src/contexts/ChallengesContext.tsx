import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';

interface Challenge{
  type: 'body'|'eye';
  description: string;
  amount:number;
}

interface ChallengesContextData{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  completeChallenge:() => void;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge:() => void;
}

interface ChallengesProviderProps{
  children: ReactNode;

}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengeProvider({children}: ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  
  const experienceToNextLevel = Math.pow((level + 1)*3,2)
  
  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp(){
    setLevel(level + 1);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();
    if(Notification.permission === 'granted'){
      new Notification('Novo desafio :tada:',{
        body: `Valendo ${challenge.amount}xp`
      })
    }
  }

  function resetChallenge(){
      setActiveChallenge(null);
  }

  function completeChallenge(){
    if(!activeChallenge){
      return;
    }
    const {amount} = activeChallenge;

    let finalEperience = currentExperience + amount;
  
    if(finalEperience >= experienceToNextLevel){
      finalEperience = finalEperience - experienceToNextLevel;
      levelUp();
    }
    setCurrentExperience(finalEperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted+1);
  }

  return(
    <ChallengesContext.Provider 
    value={{
      level, 
      currentExperience, 
      challengesCompleted, 
      experienceToNextLevel,
      activeChallenge,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge,
    }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}