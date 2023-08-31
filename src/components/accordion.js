import React, { useState } from "react";
import { noop } from "lodash";
import { accordionData } from "./data";
import "./style.scss";

const SingleAccordion = (props) => {
    const {
        heading = "",
        description = "",
        isActive = false,
        accordionId = "",
        setActiveId = noop,
    } = props;

    const toggleAccordion = () => {
        const activeIndex = isActive ? null : accordionId;
        setActiveId(activeIndex);
    };

    return (
        <div className='accordion'>
            <section className='content'>
                <h3>{heading}</h3>
                {isActive && <p>{description}</p>}
            </section>
            <div
                className={"plusminus" + (isActive ? " active" : "")}
                onClick={toggleAccordion}
            ></div>
        </div>
    );
};

const Accordion = () => {
    // eslint-disable-next-line
    const [activeId, setActiveId] = useState(0);

    return (
        <div className='accordions-wrapper'>
            <h1>Accordion Component</h1>
            {accordionData.map((item, idx) => (
                <SingleAccordion
                    key={idx}
                    heading={item.heading}
                    description={item.description}
                    isActive={activeId === idx}
                    setActiveId={setActiveId}
                    accordionId={idx}
                />
            ))}
        </div>
    );
};

export default Accordion;
