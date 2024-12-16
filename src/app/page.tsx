import './HomePage.css';
import Image from 'next/image'

export default function HomePage() {
    return (
        <>
            <Image width={500} height={500} src={"/resources/astriaza-nobg.png"} alt={"Main Title"} className='main-title-image'/>
            <p className="subtitle">Physics And Astronomy Club - IIT Jammu</p>
        </>
    );
}

