import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function RandomCartoon() {
    const files = [
        ['sammy.png', 'Sammy Seal'],
        ['bandit.png', 'Bandit Raccoon'],
        ['reese.png', 'Reesie Peanut-Butter Cup'],
        ['mothman.png', 'Mothman Steve'],
    ];

    const [imageData, setImageData] = useState({ src: '', alt: '' });
    // Initialize lastIndexRef as -1; we then try to rehydrate it from sessionStorage on mount.
    const lastIndexRef = useRef<number>(-1);

    // On mount, load the previously used index (if any) from sessionStorage and then randomize.
    useEffect(() => {
        const storedIndex = sessionStorage.getItem("lastCartoonIndex");
        if (storedIndex !== null) {
            lastIndexRef.current = parseInt(storedIndex);
        }
        getRandomImage();
    }, []);


    function getRandomImage() {

        let match = true;
        // let tries = 0;
        let randomIndex, pick;
        const oldIndex = sessionStorage.getItem('cartoon');
        while (match === true) {
            // tries++;
            // console.log('portrait tries', tries);
            randomIndex = Math.floor(Math.random() * files.length);

            pick = files[randomIndex];

            if (randomIndex != Number(oldIndex)) {
                match = false;
            }
            sessionStorage.setItem('cartoon', String(randomIndex));
            setImageData({ src: pick[0], alt: pick[1] });
        }
    }

    return (
        <div className="toon-container">
            {imageData.src && (
                <Image
                    alt={imageData.alt}
                    src={`/${imageData.src}`}
                    width={250}
                    height={300}
                />
            )}
        </div>
    );
}
