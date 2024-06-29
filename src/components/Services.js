import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Services() {
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref4, inView: inView4 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref5, inView: inView5 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref6, inView: inView6 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const applyTransition = (elementClass) => {
        const myElement = document.querySelector(elementClass);
        if (myElement) {
            myElement.style.transform = 'translateY(-50px)';
            myElement.style.opacity = '1';
        }
    };

    useEffect(() => {
        if (inView1) {
            setTimeout(() => applyTransition('.Service01'));
        }
    }, [inView1]);

    useEffect(() => {
        if (inView2) {
            setTimeout(() => applyTransition('.Service02'));
        }
    }, [inView2]);

    useEffect(() => {
        if (inView3) {
            setTimeout(() => applyTransition('.Service03'));
        }
    }, [inView3]);

    useEffect(() => {
        if (inView4) {
            setTimeout(() => applyTransition('.Service04'));
        }
    }, [inView4]);

    useEffect(() => {
        if (inView5) {
            setTimeout(() => applyTransition('.Service05'));
        }
    }, [inView5]);

    useEffect(() => {
        if (inView6) {
            setTimeout(() => applyTransition('.Service06'));
        }
    }, [inView6])
    return (
        <div className='ServicesContainer' id='ServicesContainer'>
            <div className='ServiceTitle'>
                <div>
                    <h1 className='OurServiceHeading'>OUR SERVICES</h1>
                </div>
            </div>
            <div className='ServiceSubContainer1'>
                <div></div>
                <div className='Service01' ref={ref1}>
                    <div className='S1Item01'>Web Application</div>
                    <div className='S1Item02'>
                        We can create and maintain your<br />
                        software so that you can focus on<br />
                        revenue streams.
                    </div>
                    <div className='S1Item03' >
                        <img className='Webicon' src='5.png' alt='Web Application' />
                    </div>
                    <div className='S1Item04'>
                        <button className='ButtonWeb'>
                            <a className='ButtonWeb' href='#ServiceContainer'>Read more</a>
                        </button>
                    </div>
                </div>
                <div></div>
                <div className='Service02' ref={ref2}>
                    <div className='S2Item01'>Mobile Application</div>
                    <div className='S2Item02'>
                        We can create and maintain your<br />
                        mobile so that you can focus on<br />
                        revenue streams.
                    </div>
                    <div className='S2Item03'>
                        <img className='Mobileicon' src='6.png' alt='Mobile Application' />
                    </div>
                    <div className='S2Item04'>
                        <a className='ButtonWeb' href='#ServiceContainer'>Read More</a>

                    </div>
                </div>
                <div></div>
                <div className='Service03' ref={ref3}>
                    <div className='S2Item01'>Soft Development</div>
                    <div className='S2Item02'>
                        We can create and maintain your<br />
                        softapp so that you can focus on<br />
                        revenue streams.
                     </div>
                    <div className='S2Item03'>
                        <img className='Softicon' src='7.png' alt='Soft Development' />
                    </div>
                    <div className='S2Item04'>
                        <button className='ButtonWeb'>
                            <a className='ButtonWeb'>Read more</a>
                        </button>
                    </div>
                </div>
                <div></div>
            </div>
            <div></div>
            <div className='ServicesSubContainer2'>
                <div></div>
                <div className='Service04' ref={ref4}>
                    <div className='S4Item01'>Desktop Application</div>
                    <div className='S4Item02'>
                        We can create and maintain your<br />
                        software so that you can focus on<br />
                        revenue streams.
                    </div>
                    <div className='S4Item03'>
                        <img className='Desktopicon' src='9.png' alt='Desktop Application' />
                    </div>
                    <div className='S4Item04'>
                        <button className='ButtonWeb'>Read more</button>
                    </div>
                </div>
                <div></div>
                <div className='Service05' ref={ref5}>
                    <div className='S5Item01'>Graphic Design</div>
                    <div className='S5Item02'>
                        We can create and maintain your<br />
                        software so that you can focus on<br />
                        revenue streams.
                    </div>
                    <div className='S5Item03'>
                        <img className='Graphicicon' src='10.png' alt='Graphic Design' />
                    </div>
                    <div className='S5Item04'>
                        <button className='ButtonWeb'>Read more</button>
                    </div>
                </div>
                <div></div>
                <div className='Service06' ref={ref6}>
                    <div className='S6Item01'>Video Editing</div>
                    <div className='S6Item02'>
                        We can create and maintain your<br />
                        software so that you can focus on<br />
                        revenue streams.
                    </div>
                    <div className='S6Item03'>
                        <img className='Videoicon' src='11.png' alt='Video Editing' />
                    </div>
                    <div className='S6Item04'>
                        <button className='ButtonWeb'>Read more</button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}
