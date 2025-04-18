import { Confetti } from "@/components/WelcomeComponent";
import HomePage from "../page";
import "./WelcomePage.css"
import WelcomeComponent from "@/components/WelcomeComponent";

export default function WelcomePage() {
    return (
      <WelcomeComponent>
        <Confetti
          recycle={false}
          style={{ position: 'fixed', zIndex: 3 }}
        />
        <HomePage />
      </WelcomeComponent>
    )
}