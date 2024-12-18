import './HomePage.css';
import Image from 'next/image'
import titleImg from '../../public/resources/astriaza-nobg.png'

export default function HomePage() {
    return (
        <div className="home-page">
            <Image
                width={500}
                height={500}
                src={titleImg}
                alt={"Main Title"}
                priority
                className='main-title-image'/>
            <p className="subtitle">Physics And Astronomy Club - IIT Jammu</p>
        </div>
    );
}

