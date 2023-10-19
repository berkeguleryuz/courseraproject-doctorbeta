import React, { useState } from 'react';


function FindDoctorSearchIC() {
    const [searchValue, setSearchValue] = useState('');
    const [showDoctorList, setShowDoctorList] = useState(false);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleFocus = () => {
        setShowDoctorList(true);
    };

    const handleBlur = () => {
        setShowDoctorList(false);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a doctor's specialty"
                value={searchValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {showDoctorList && (
                <div className="doctor-list">

                </div>
            )}
        </div>
    );
}

export default FindDoctorSearchIC;
