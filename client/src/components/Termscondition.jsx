import React, { useState } from 'react';
import '../css/style.css'
import topimage from '../assets/termscondition.jpg';

const Termscondition = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'Purchase',
            heading: 'Selecting Your Diamond:',
            content: 'Customers can choose their desired diamond through the ‘Bucket Option’ on our website.'
        },
        {
            title: 'Payment',
            heading: 'Payment:',
            content: 'Full payment for the diamond is required upfront to secure the order.'
        },
        {
            title: 'Delivery',
            heading: 'Delivery Commitment:',
            content: 'Upon receipt of payment, we commit to delivering the certified diamond within 5 to 14 business days. Delivery will be made directly to the professional client’s specified address. We provide tracking information and support throughout the shipping process.'
        },
    ];

    return (
        <div className='termscondition'>
            <div className="banner">
                <div className="termscondition_body">
                    <h2>Terms, Conditions, AND Policies </h2>
                    <div className="tab_container">
                        <div className="tabs">
                            {/* Render tabs */}
                            {tabs.map((tab, index) => (
                                <button key={index} onClick={() => setActiveTab(index)}className={activeTab === index ? 'active' : ''}>
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        {/* Render content of active tab */}
                        <div className="tab-content">
                            <h4>{tabs[activeTab].heading}</h4>
                            <p>{tabs[activeTab].content}</p>
                        </div>
                    </div>
                    <div className="termscondition_body_img">
                        <img src={topimage} alt="topimage" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Termscondition;
