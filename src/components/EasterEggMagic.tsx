"use client"
import { useEffect } from "react"

declare global {
  interface Window {
    revealSecret?: () => void;
  }
}

export default function EasterEggMagic() {
  useEffect(() => {
    // Define the revealSecret function
    const revealSecret = () => {
      console.log("🎉 You've unlocked an Easter egg! 🎉");
      console.log("Secret Code: 42 is the answer to life, the universe, and everything.");
      console.log("Fun Tech Fact: The first computer bug was a real moth!");
      console.log("Keep exploring, and who knows what you might find!");
    };

    // Attach the function to the window object
    window.revealSecret = revealSecret;

    // Cleanup function to remove the reference when the component unmounts
    return () => {
      delete window.revealSecret; // Clean up the global reference
    };
  }, []);
  return (
    <div className="super-secret-easter-egg" style={{display: 'none'}}>
    Too curious? This one is for you! Try typing revealSecret() in the browser console to see what is hidden here.
    </div>
  )
}