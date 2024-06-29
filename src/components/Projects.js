import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Projects() {

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const applyStyle = () => {
        const textElement = document.querySelector('.ProjectHead');
        if (textElement) {
          textElement.style.opacity = '1';
        }
      };

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                applyStyle();
            }, 500); 
        }
    }, [inView]);

    const pointofsaleDisp1 = 'We have created and deployed a comprehensive Point of Sale (POS) application for fast food businesses, ensuring a seamless and efficient process for managing sales and transactions. We can create and maintain your fast food POS application so that you can focus on revenue streams. We created and maintained POS system so that you can focus on revenue streams.';
    const fypSystem1 = 'Key features include project submission, allowing students to easily submit their projects online; project tracking for real-time progress monitoring by faculty and students; a feedback system for structured feedback from advisors and examiners; document management for securely storing and managing all project-related documents; for handling different roles such as students, advisors, and administrators.';
    const safePass1 = 'We have created and deployed a comprehensive Password Security web application, ensuring robust protection and management of user credentials. Our application features a responsive UI, top-notch security measures, and detailed analytics designed to meet the needs of modern web users.';
    const schoolSystem1 = 'We have developed and implemented a comprehensive School Learning Management System (LMS), designed to streamline education delivery and enhance student learning experiences. Our LMS platform offers a centralized hub for schools to manage their academic resources, assignments, and communication channels efficiently.';
    const blindNav1 = 'We have created and deployed a comprehensive Navigation mobile app designed specifically for use within a university, catering to blind users. Our app features intuitive voice interaction for both user input and output, ensuring seamless and efficient navigation across the campus.';

    const [Animate, setAnimate] = useState(false);
    const [Head1, setHead1] = useState('Point of Sale App');
    const [projectDisp1, setprojectDisp1] = useState('Project Discription Here');
    const [state, setState] = useState('');
    const HandleClick = (event) => {
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false)
        }, 500);
        setHead1(event.target.innerText);
        if (event.target.innerText === 'Point of Sale App') {
            setprojectDisp1(pointofsaleDisp1);
            setState('');
        }
        else if (event.target.innerText === 'FYP Management App') {
            setprojectDisp1(fypSystem1);
            setState('');
        }
        else if (event.target.innerText === 'Password Security') {
            setprojectDisp1(safePass1);
            setState('');
        }
        else if (event.target.innerText === 'Navigation System') {
            setprojectDisp1(blindNav1);
        }
        else if (event.target.innerText === 'School LMS App') {
            setprojectDisp1(schoolSystem1);
            setState('');
        }
    }
    return (
        <div className='ProjectContainer' ref={ref} id='Projects'>
            <div className='ProjectLine2'>
                <hr className='Line' />
            </div>
            <div className='ProjectTitle'>
                <h2 className='ProjectHead'>
                    GLIMPSE OF OUR PROJECTS
                </h2>
            </div>
            <div className='ProjectDiscpContainer'>
                <p className='ProjectDiscription'>
                    At AMA Solutions, we have successfully delivered numerous projects across web, mobile, and desktop platforms. Our projects range from responsive websites and high-performance mobile applications to robust desktop software, all tailored to meet specific business needs. Each project showcases our commitment to quality, innovation, and client satisfaction, reflecting our expertise and dedication to providing top-notch digital solutions.
                </p>
            </div>
            <div className='ProjectButtons'>
                <button className='Project1' onClick={HandleClick}>
                    Point of Sale App
                </button>
                <button className='Project2' onClick={HandleClick}>
                    FYP Management App
                </button>
                <button className='Project3' onClick={HandleClick}>
                    Password Security
                </button>
                <button className='Project4' onClick={HandleClick}>
                    School LMS App
                </button>
                <button className='Project5' onClick={HandleClick}>
                    Navigation System
                </button>
            </div>
            <div className='ProjectLine'>
                <hr className='Line' />
            </div>
            <div className='ProjectDisplayContainer'>
                <div className='ProjectDisplayContainer1'>
                    <div className='ProjectHeadin'>
                        <h3>
                            {Head1}
                        </h3>
                    </div>
                    <div className='ProjectDisplayContainer2'>
                        <p className={`ProjectDisplayDicp ${Animate ? 'animate' : ''} `}>
                            {projectDisp1}
                        </p>
                    </div>
                </div>
                <div className='ProjectImContainer'>
                    <img className='ImProject' src='10.png' alt='Project' />
                </div>
            </div>
        </div>
    );
}
