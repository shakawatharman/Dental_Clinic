import React from 'react';
import './Suggestion.css';

const Suggestion = () => {
    return (
        <div className="container suggestion-section">
            <h3 className="py-3 fw-bold text-success text-center">Suggestions from Dentist</h3>
            
           <div className="row">
           <div className="col-md-6 col-sm-12">
            <ul  className="py-3">
                    <li className="my-3 fw-bold text-success">Brush Regularly and Properly.</li>
                    <li className="my-3 fw-bold text-success">Floss Daily.</li>
                    <li className="my-3 fw-bold text-success">Rinse with a Fluoride Mouthwash.</li>
                    <li className="my-3 fw-bold text-success"> Be Physically Activ.</li>
                    <li className="my-3 fw-bold text-success">Have a well-balanced diet.</li>
                   
            </ul>
            </div>
            <div className="col-md-6 col-sm-12">
            <ul  className="py-3">
                    
                    <li className="my-3 fw-bold text-success">Increase your Calcium Intake.</li>
                    <li className="my-3 fw-bold text-success">Limit Coffee Intake.</li>
                    <li className="my-3 fw-bold text-success">Cut Out Tobacco.</li>
                    <li className="my-3 fw-bold text-success"> Limit or Cut Out Carbonated Beverages.</li>
                    <li className="my-3 fw-bold text-success">Visit your Dentist Regularly.</li>
            </ul>
            </div>
           </div>
        </div>
    );
};

export default Suggestion;