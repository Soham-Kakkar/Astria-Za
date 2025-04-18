"use client"

import { upcomingEvents } from "@/app/events/utils"
import ConfirmationDialog, { type ConfirmationDialogState } from "./ConfirmPopup/ConfirmPopup"
import { useRef, useState } from 'react';
import Image from "next/image";

export default function FutureEvents() {

  const futureEventsContainerRef = useRef<HTMLDivElement>(null);

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState<ConfirmationDialogState>(["", false]);

  return (
    <>
    {/* Upcoming Events Section */ }
    <div className="future-event-section">
    <h2 className="future-event-type">Upcoming Events</h2>
    <div className="future-event-cards" ref={futureEventsContainerRef}>
        {upcomingEvents.map((futureEvent, index) => (
            <div
                key={index}
                className="future-event-card"
                data-future-event-type={futureEvent.typeOfEvent}
            >

                <div className="future-event-card-header">
                    <span className="future-event-name">{futureEvent.eventName}</span>

                    <span className="future-event-date">
                        {new Date(futureEvent.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </span>
                </div>
                <div className="future-event-card-content">
                    <p className="future-event-description">
                        <Image
                            height={450}
                            width={450}
                            src={`${process.env.NEXT_PUBLIC_SITE_NAME}/${futureEvent.imageURL}`}
                            alt="event poster"
                            className='event-img'
                            loading='lazy'
                            placeholder='data:image/jpeg;base64,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XBJJJIkglBQWgFLbbq1cEkZkRJACgtAFLbbq2spIkkiSAAKoBQttt1VySSSSEIilIoLCgttt1SEZSSRAlACglArVtuhCSRMpYgFEoRUoVbbbaIjKSIgIoAABTVttoSJIjIEKIAAC22222ESRERAsASoAC21q26yQkkIRFIACAFW2222CJESABIWNSBApbbbbf//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgQD/9oACAEDEAAAAONbpVtU0UABKAAQZctttW1VWlAAigAQMuWrbatWrSgBAsKBAycq22raqrVACAChAZOS2rbVtVaoBAALAEhyVaultWlpQQEpKAQhOS21batqmihAgRVAksRyWrWlttUtBYJAFKSAjjulW21pVWgCQAFICLxW1bbatqloCQAAAQ4rqrVtttUtAkCAoBAcVulW21paLQkEAKCAOK21bba0tFoZCAAqAHFbaq6taWhaSCEsoABDkNVVuq0tDQyIQAoEByF0q3S22i1EEQACwA5C2rbdNLRaSCIQKABLyFtWtaaWi0kEIiLKoIQ5i2rWtNVQ0JBCEgFEsHMVpa1q2qVREIISAAQ5yrbWtNVSqEggQkAEHOppa1q2qtAiCBCSAETxVatt1bVWgRAgQkhAieVGlt1baq0BEAQZSQhDzC226ttVoAJAEEykyQmQtrWrdKWgCQFhDMZkiGRat1dWqtKQEFkCJJJmRCFq3WratpQgAQgkmWcySagturq2raUIACEIkzMzMmoLbrVttWlBAAIiGZM5kmslXV1bbWigIACQRJliQyLbrVttaKAQAEREkmZkyLdXVttaUAQACQkZmZEyLdattttUAQACQiZkkmYLbrVtttoAQACQiSZkZkltutW222gBAASERmJlmSW26urpdKABABIQkkmWUi26urqtKABACQRGUmUki23WrqtKABAEgRIkkZki23Wrq2qAEASARJIkuEhbdatuqoAIEIBEkiS5kC3WrdWqAEAIESJIkuZAt1q3VtABAAREiSRESFXWrdW0ACAqCJEyiTWZEqtaurbQAEFEEkSSJFkgtutW20AAAQSRJJEqQLbdW20AAAISJGYipAtatt0CoAAESJGYBAq226oogAAQkiSIAFXVtpQQAqLBJEiSVAqqttpQEsFAQjMSCQVVWtKoAShRCEkiCQWlLatlAAWhEQmUQZKtFW1QFAUBIiSIhlaqlWqBQBQBlEkgYWtKpShSgAohJDMIvmttqqFooAFBBJEkJfNbbaoqqAAUAiGUkHmtt1RRaAAUVLCDMiI81a1aKqgAUBRCEyiL4XS3VKWgFEoFCBJIg8NLbqqWgFABQIJJCLz223VVZoAoAUBBEkDnttuqqqBQAKAgSSBz223VVaCkoBQAREkDnttuqq0CgAUWAiJEHPbbdVTQFAFlCwERkg//xAAdEAEBAQEBAQEBAQEAAAAAAAABEQAQIDBAUGAC/9oACAEBAAECAOHo8HwP4T83Pp8PXPXrnOePp+p8T+u8c58ufD5c9euePHj8THD+o/hePhznw/J45z4fB+o/nPHj4eOeOc50454+HPHyeDh/cc+3Phz5ePHkeuc5zn7X+e9evl9vHPHzOuj165znPXj09HR/pP53j4ePh458vJ9z+o8fLn058PXw5M5znOeOfiez+2/Z4nJxzxzo565+B7P7T4c+3rnJ5ePHPXPwOH+KfSceRznjnOc8fwn+Cc8fD8Hj149c5+B7PR/DeP3fL1458Oc59PXOeuc/Ex7Pmfa/gf2zPt4568c5/Efx3P8AAeOfDnPU65/Mf135vtz2PXOc5/Gf4h8Oc9c8c5znyfgP5z+h8OeueOc8f0HD+7PLxz1z1z1z6Pifc+p/Hfi8euc545zx7fwH+Bfg/FznjnOf8Y/N6+HOc9c54/6Jzx4rnOeOf1H7H2/sc+nPXjx455f7L/CePh45zn8B5PR/Jt/C+3rnPlznOc6Xl4fw7fs/qfLx8Oc5z1zxz8L9z+M/S/O+a548c5znPHKuvq63X+RePl83zfjdfm5znOc5yvLby6645T+U+b4ut5dby2+74r1znjnPHl1tt5eXwY+Jj9t93ttttvi63XXi5yurnK5znOeW263pjHg5f5l11uvi22222223K63KquVzlttuvi2mEcPob+p9PbctutvLdbbbdbbbbba6ucqqqqutttututtt90/c9eW3W2622222266622qtqqqqqqtttttttoiOG6nDyeT73lvp1tttutttttttuttq21aqrVVyqtttto2011NeDjU1/ZcvLc5y62223tttttttq2qq1VWq5Vttttto0RphEwmpwfR+S+bnry26rdby2222223Lbbaqqqqq22220RutojR9mvu6+Lr8LlyuvLbXw9ttttt1ttrlq1atVaqqttttttojbbaNtMamOnwt7fNfF9uW6622223W221bVW2qtWqq1VW222iNoiInKNoiI3p6t+14+rnW63W3W62221bbbbVqqtVVVVWrRtto20aI0RojRtERvi+7q+r4uvHKt11tt7dbbbbbbbaqqqrbVqqttttG0RERERGiYTCNNdTt+t15bx7Vryqttvbbbbbaty6rltVVWqqrbbRERGiIiNoiIjROWia28tut5ddbdXOtt11que3W3W21bbbbbVrlqqqqqqqrbbRo0bRERGiYREbRGiOtt1vbe223W26229deW222rby23VbVtq1VW2qqrbbaf9W0REREaI0RER11t8W3XW228t5VtVdeXXW626623Xtrqtqqq1VVVVVWiI26iIiIiIiYRphNbdbbbdeXW62225y3W51tXW1bb223XW223VVVVVVVVVVW222jaIiIiIiYREbRHCPbbbbbeW3XW9q21XLVdb263l5bbx1tVbVXKqqqqtttEaIjRERERMImERphvLbbdbbbbbdbbbl1uXOePHldfgcvLdctV1c5XKrnLrR1oiIiIiIiJhE1EwmG8tvi3W22223K5V1eLlc5deX6Xrqrq5c5XOrlVy62iNERERGiJhERERG3CNtttttt1utut5eVy5bx4+b18PtznOXOcrnKqqq8GjbRGiImERERERHgjqa2222226263Wutt5Xjnjx5fi+XWvXw5znOc5znto6jRERMIiJjGMJhExjGNdbbbrbbby1bbrV4vHjx/W5znOc5znPm0RxhoiJhGiJhERMOEbdbbbbbbbbbbbbrcvl49ePX6vHrnOc5znjnOeUbhETUwiJhMYTGHCa0w23W22222223XW8vHldc8vb5vh9OePHOc5zxznOc8to60aOERMYTGMYcNo22222223W22222228t+l6/RznOeOePHOeSjRERomMIiJwxjCJhwjbbbbbbbbbbattttdc629vxvqdePHOcjnOc5z15bR1phMImEwmMYxw1tG222222222222223w55b+ZzxznPEc5znOc6SiNEwiJhETCYRERE1E1tttttuttttttt5be3Xl1+b5j1znPXOc5znOSctoiJjGMIiYxqNExrho222222222222222266v6Hr1znI5znjo50tMOMYRETGEROGpqNG262222223W2222222238r5c9eOc5zkc5MktomOGMYxhMYTCOttEbRttttttttttutttttt838TnjpnJnjnOc5468NTGEwiYRE1ExjlE1Ebbbbbrbrctt1ttvLbrdfs+J8XOc548dPFGmMY4IiYwmMI4TgiNtt1to22626222222263ltv6XOc5zxznOfB0TCYxjGMOETCOtEby22222623l5dbdby26+L+F69eOc5znOc59GMY4P/OMJjCcMajdbbbbbddbbbbbdbrdfN7b5v4XjnOc5znOc5znWnDGpwxjGMJjgjbbbbbbdbbbrbbbbddeW3X4W/heuc8c5znI5znOnoxjf84xjn/OOHDwfM68fJ255fC68MdfidMfgc5znOc8c55//xAApEAAAAwcEAgIDAQAAAAAAAAABITEAEBEgQGBhMFBwsXGAUYECYpCh/9oACAEBAAM/APQ06UbLL1/DmlOQ/P8ANdOAc+oI3Is/j08DTO5cXXj/AFg1I8kj8+l0NTM48qZ1kt/9eK4cNFc+brwNzQlDHKw3EV6eeak9LQuODloYMGmG8QrAxdf5fOwDVwoA2PNqxv4LpxU5psyY29dMWU3xqis4bmWQfkJcaMaWFBDZV2odId2KhV4OGRHR3kKIqgMWmjzYpClV62aOwLowCXpu2IBwyfTumR5g/tid29GR/TyY3GyPIXlojFxvGH03c5MumYydSlMT1mXy4vqX/8QAIhEAAQQCAgIDAQAAAAAAAAAAAREgQFAQMABRIWBBYYFw/9oACAECAQE/AIXTxBF985U9xDlJIvFPdt57Hti4NwZAcYAYlMkBR6UYgiGw/LEYGf0WIb+e0Bxgn1cYTnVmMjQasXHnoXh/jorBQKKY3p1majz7CMC0GBhKpNAimnRx0GtNOnohio0RkMFZKRC02BqA0VyYGpNRck8V4iHhrU+3mYjQ8PTCaDVDYYwghqfTTLEUSvDxtDR8bjRjAyNJyagNE4Qw5RRilSiG9HF6cSINCZOTCSakZMI5IgnpxIBcLQYGBvSeJiShKTSg4kgbTrRdCcTCbwwbDpLE4mxNQhHX00sO8bP/xAAfEQEAAAcBAQEBAAAAAAAAAAABABARIDBAUCFgUSL/2gAIAQMBAT8AyHxZtH03l59Adw1qxXRrl961e6TJmdtbj4XzrUmYTjVsrkN2uwdYgmaLN3CZM6BMtOiaTwTk1ykzUpwjh1trYYTAaRlrlN7yymobXu6a9J00q4iw3aap0jGfUHCcpBBx2xxFxM5hBccthmQXGhTSchImTOE6J1iw2a7BBBByqP7hIIIIIOkQXGy6xBBBvuoTJHH/AK/bG4gsOids4tNl41OfQ/OgypZ7+dB69PiDNSGTjpc30cdNN2POW/Z0vOn7acN6VNk6hI0DHR4BrV2zZ8xs3ETJGQ5RkMblZuH/2Q=='
                        />
                    </p>
                </div>
                <button
                    className="link-button"
                    onClick={() => setOpenConfirmationDialog([futureEvent.eventName, true])}>Register Now!
                </button>
                {openConfirmationDialog[1] && <ConfirmationDialog eventName={openConfirmationDialog[0]} setOpenConfirmationDialog={setOpenConfirmationDialog} />}
            </div>
        ))}
        {upcomingEvents.length === 0 && <p>Waiting for the next event!</p>}
    </div>
</div>
<div style={{ height: '0.1px' }} id="future-events"></div>
</>
  );
}