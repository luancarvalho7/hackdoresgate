import './progress.css';
import gift from '../../images/gift.png';
import blackgift from '../../images/blackgift.png';

import { useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

export function ProgressBar({ revealBtn }) {

    const location = useLocation();
    const page = location.pathname;
    const [progress, setProgress] = useState(0)
    const [percentage, setPercentage] = useState(0)


    useEffect(() => {
        let interval;

        if (revealBtn) {

            let x = 0

            interval = setInterval(() => {

                x ++

                if (x==2){
                    setPercentage(2)
                }
                
                if (x==3){
                    setPercentage(100)
                }
                if (x >= 100) {
                    setProgress(100);
                    clearInterval(interval);
                } else {
                    setProgress(x);
                }
            }, 18); // update interval in milliseconds
        }




        return () => {
            clearInterval(interval); // clear interval on component unmount or if revealBtn changes
        };

        
    }, [revealBtn]);


    return (
        <section id="progressBar">
            <h1 className='hackTxt'>{progress == 100 ? 'SUCESSO' : 'HACKEANDO...'}</h1>
            <div className="progressInfo">
                <h1>{progress}%</h1></div>
            <div className="progressFil" style={{ width: `${percentage}%` }}></div>
        </section>
    );
}
