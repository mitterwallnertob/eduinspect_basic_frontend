import React, { useEffect, useState } from 'react';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const months = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
];

const Number = ({ value = 0 }) => {
    const result = String(value).padStart(2, '0');
    return (
        <div className="digital">
            <p>{result}</p>
        </div>
    );
};

const Word = ({ value, hidden = false }) => {
    const getStyle = () => {
        return {
            visibility: hidden ? 'hidden' : 'visible'
        };
    };
    return (
        <div className="digital">
            <p style={getStyle()}>{value}</p>
        </div>
    );
};

export const LiveClock = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [day, setDay] = useState(0);
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const update = () => {
            const date = new Date();
            setHour(date.getHours());
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
            setDay(date.getDay());

            const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
            setFormattedDate(formattedDate);
        };

        update();

        const interval = setInterval(() => {
            update();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hidden sm:hidden lg:flex md:flex'>
            <div className="p-4 rounded-lg flex flex-col flex-1 justify-center items-center">

                <div className="flex">
                    <div className="flex items-center lg:text-7xl md:text-5xl text-3xl">
                        <Number value={hour} />
                        <Word value={':'} />
                        <Number value={minute} />
                        <Word value={':'} />
                        <Number value={second} />
                    </div>
                </div>

                {/*
                <div className="text-xl lg:text-2xl md:text-xl flex justify-center items-center lg:gap-4 md:gap-2 pb-2">
                    {days.map((value, index) => (
                        <div key={value} className={`text-${index !== day ? 'gray-400 opacity-50' : 'black'}`}>
                            <Word value={value} />
                        </div>
                    ))}
                </div>
                */}

                <div className="text-xl text-gray-400 lg:text-2xl md:text-xl flex justify-center items-center lg:gap-4 md:gap-2 pb-2">
                    {formattedDate}
                </div>

            </div>
        </div>
    );
};
