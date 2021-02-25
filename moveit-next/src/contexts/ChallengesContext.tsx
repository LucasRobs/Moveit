import { createContext, useState, ReactNode } from 'react';
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
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge:() => void;
  activeChallenge: Challenge;
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
  
  function levelUp(){
    setLevel(level + 1);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge(){
      setActiveChallenge(null);
  }

  const experienceToNextLevel = Math.pow((level + 1)*3,2)

  return(
    <ChallengesContext.Provider 
    value={{
      level, 
      currentExperience, 
      challengesCompleted, 
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
    }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}