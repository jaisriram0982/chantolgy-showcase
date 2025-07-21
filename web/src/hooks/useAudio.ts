import { useState, useEffect } from "react";
//global audio reference
let audioRef: HTMLAudioElement | null = null;

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteraction, setuserInteraction] = useState(false);

  //audio initialized
  const initAudio = () => {
    if (audioRef) return;
    audioRef = new Audio("/bkg_chantolgy-v1.mp3");
    audioRef.loop = true;
    audioRef.volume = 0.4;
  };

  //plays the audio
  const playMusic = async () => {
    if (!audioRef) return;
    try {
      await audioRef.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Autoplay failed:", error);
    }
  };

  //pauses the audio
  const stopMusic = () => {
    if (audioRef) {
      audioRef.pause();
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (!userInteraction) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isPlaying ? stopMusic() : playMusic();
  };

  useEffect(() => {
    initAudio();
    // plays audio on first user interaction
    const handleInteraction = () => {
      if (!userInteraction) {
        setuserInteraction(true);
        playMusic();
      }
    };
    //triggers audio on user interaction once
    window.addEventListener("click", handleInteraction, { once: true }); //automatically removes the listener after first interaction
    window.addEventListener("keydown", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [userInteraction]);

  return {
    isPlaying,
    toggleMusic,
    userInteraction,
  };
};
