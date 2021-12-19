import React from 'react';

import './schedule.css';

const Schedule = () => {
    const days = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
    const times = [8,9,10,11,12,13,14,15,16,17,18,19,20,21];

    return (
        <div className="schedule">
            <div className="d-flex days">
                <div className="cell blocked"></div>
                {days.map((day) => <div key={day} className="cell blocked">{day}</div>)}
            </div>
            {times.map((t) => {
                const time = t < 10 ? '0' + t : t;
                return (
                    <div key={t} className="d-flex line">
                        <div className="cell blocked">{time}:00</div>
                        {days.map((day) => <div key={day} className="cell"></div>)}
                    </div>
                );
            })}
        </div>
    );
};

export default Schedule;