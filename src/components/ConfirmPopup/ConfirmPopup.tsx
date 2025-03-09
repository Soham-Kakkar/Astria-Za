import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';
import SignInBtn from '@/components/SignInBtn';

interface ConfirmationDialogProps {
  eventName: string;
  setOpenConfirmationDialog: Function;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ eventName, setOpenConfirmationDialog }) => {
  const { data: session } = useSession();
  const [isSubmitting, SetIsSubmitting] = useState(false);
  const [isSubmitted, SetIsSubmitted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`registeredFor${eventName}`) === "true") {
      SetIsSubmitted(true);
    }
  }, [eventName]); // Runs only when eventName changes

  const handleAutoRegister = async (eventName: string) => {
    SetIsSubmitting(true);
    try {
      const response = await fetch("/api/submitform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formResponses: {
            eventId: eventName, // This is the form name
            fields: {
              "name": session?.user?.name,
              "email": session?.user?.email,
            },
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Registered successfully");
        localStorage.setItem(`registeredFor${eventName}`, "true");
        SetIsSubmitted(true);
      } else {
        alert("An error occurred while registering");
        console.error(result.error || "Failed to register");
      }
    } catch (error) {
      alert("An error occurred while registering");
      console.error((error as Error).message);
    } finally {
      SetIsSubmitting(false);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        {session ? (
          <>
            <div>Confirm Registration for {eventName}</div>
            <button onClick={() => handleAutoRegister(eventName)} disabled={isSubmitting || isSubmitted}>
              {isSubmitting ? "Registering..." : isSubmitted ? "Registered!" : "Confirm"}
            </button>
            <button onClick={() => setOpenConfirmationDialog(["", false])}>
              {isSubmitted ? "Close" : "Cancel"}
            </button>
          </>
        ) : (
          <>
            <div>Sign In first to register</div>
            <SignInBtn />
            <button onClick={() => setOpenConfirmationDialog(["", false])}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmationDialog;
