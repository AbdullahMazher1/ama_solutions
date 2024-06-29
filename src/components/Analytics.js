import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';    

const ScrollComponent = () => {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true, 
    });

    const updateValue1 = () => {
        let i = value;
        const update = () => {
            if (i <= 11) {
                setTimeout(() => {
                    setValue(i);
                    if (i <= 4) {
                        setValue1(i);
                    }
                    if (i <= 8) {
                        setValue2(i);
                    }
                    if (i <= 2) {
                        setValue3(i);
                    }
                    if (i <= 15) {
                        setValue4(i);
                    }
                    i++;
                    update();
                }, 70);
            }
        };
        update();
    };

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                updateValue1();
            }, 700); 
        }
    }, [inView]);

    return (
        <div className="AnalyticsContainer" id='AnalyticsContainer'>
            <div className='AnalyticsUpperContainer'>
                <div className='AnalyticsLeft'>
                    <div>
                        <h5 className='AnalyticsSubHead'>
                            Here is our progress
                        </h5>
                    </div>
                    <div>
                        <h2 className='AnalyticsHead'>
                            Mega Services Deployed Throughout the Countries
                        </h2>
                    </div>
                </div>
                <div className='AnalyticsNext'>
                    <p className='AnalyticsPara'>
                        At AMA Solutions, We focus on delivering innovative, user-friendly, and efficient applications that drive engagement and streamline operations. Our commitment to excellence ensures that every project we undertake is executed with precision, meeting your specific business requirements and exceeding your expectations.
                    </p>
                </div>
            </div>
            <div className="AnalyticsBottomContainer" ref={ref}>
                <div className="AnalyticsColumn AnalyticsC1">
                    <div>
                        <img className='ImWebAnalytics' src='web.png' alt='Web Apps' />
                    </div>
                    <div>
                        <h3 className='AnalyticsValue'>
                            {value}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        Web Apps
                    </div>
                </div>
                <div className="AnalyticsColumn AnalyticsC2">
                    <div>
                        <img className='ImWebAnalytics' src='22.png' alt='Android Apps' />
                    </div>
                    <div>
                        <h3 className='AnalyticsValue'>
                            {value2}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        Android Apps
                    </div>
                </div>
                <div className="AnalyticsColumn AnalyticsC3">
                    <div>
                        <img className='ImWebAnalytics' src='25.png' alt='Desktop Apps' />
                    </div>
                    <div>
                        <h3 className='AnalyticsValue'>
                            {value3}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        Desktop Apps
                    </div>
                </div>
                <div className="AnalyticsColumn AnalyticsC4">
                    <div>
                        <img className='ImWebAnalytics' src='23.png' alt='UX/UI Design' />
                    </div>
                    <div>
                        <h3 className='AnalyticsValue'>
                            {value4}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        UX/UI Design
                    </div>
                </div>
                <div className="AnalyticsColumn AnalyticsC5">
                    <div>
                        <img className='ImWebAnalytics' src='22.png' alt='Other Apps' />
                    </div>
                    <div>
                        <h3 className='AnalyticsValue'>
                            {value1}
                        </h3>
                    </div>
                    <div className='AnalyticsTitle'>
                        Other Apps
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollComponent;
