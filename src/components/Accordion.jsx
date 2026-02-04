import { useState } from "react";

const Accordion = ({items}) => {
    const [openIdx, setOpenIdx] = useState(null);
    const toggle = (index) => {
        setOpenIdx(prev => (prev === index ? null : index));
    };
    // items = [{role: "", desc: ""}, {...}, ...] arr of objs
    

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} style={{ borderBottom: "1px solid #ddd" }}>
                    <button
                        onClick={() => toggle(index)}
                        style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "12px",
                            fontWeight: "bold"
                        }}
                    >{item.role}
                    </button>
                    {openIdx === index && (
                        <div style={{ padding: "12px" }}>
                            {item.desc}
                        </div>
                    )}
                </div>
            ))};
        </div>
    );
};

export default Accordion