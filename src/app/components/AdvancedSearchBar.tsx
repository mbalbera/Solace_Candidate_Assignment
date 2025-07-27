import React, { useState } from "react";
import { AdvancedSearchProps } from "../types/SearchBarProps";

const AdvancedSearchBar: React.FC<AdvancedSearchProps> = ({
    onSearch,
    toggleSearchMode,
}) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [degree, setDegree] = useState<string>("");
    const [specialties, setSpecialties] = useState<string[]>([]);
    const [yearsOfExperience, setYearsOfExperience] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const onReset = () => {
        setFirstName("");
        setLastName("");
        setCity("");
        setDegree("");
        setSpecialties([]);
        setYearsOfExperience("");
        setPhoneNumber("");
    };

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
                <label htmlFor="firstName" className="w-32">
                    First Name
                </label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="lastName" className="w-32">
                    Last Name
                </label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="city" className="w-32">
                    City
                </label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="degree" className="w-32">
                    Degree
                </label>
                <input
                    id="degree"
                    type="text"
                    value={degree}
                    onChange={e => setDegree(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="specialties" className="w-32">
                    Specialties
                </label>
                <input
                    id="specialties"
                    type="text"
                    value={specialties.join(", ")}
                    onChange={e =>
                        setSpecialties(
                            e.target.value.split(",").map(s => s.trim())
                        )
                    }
                    placeholder="Comma separated"
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="yearsOfExperience" className="w-32">
                    Years of Experience
                </label>
                <input
                    id="yearsOfExperience"
                    type="text"
                    value={yearsOfExperience}
                    onChange={e => setYearsOfExperience(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="phoneNumber" className="w-32">
                    Phone Number
                </label>
                <input
                    id="phoneNumber"
                    type="text"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <button
                    onClick={toggleSearchMode}
                    className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 border border-gray-300 rounded hover:bg-gray-300 transition"
                    type="button"
                >
                    Return to Simple Search
                </button>
                <button
                    onClick={onReset}
                    className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 border border-gray-300 rounded hover:bg-gray-300 transition ml-2"
                    type="button"
                >
                    Reset All
                </button>
                <button
                    onClick={() => onSearch({
                        firstName,
                        lastName,
                        city,
                        degree,
                        specialties,
                        yearsOfExperience,
                        phoneNumber,
                    })}
                    className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition ml-2"
                    type="button"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default AdvancedSearchBar;
