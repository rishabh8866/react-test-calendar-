import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateComponent = ({selectedDate, setSelectedDate}) => {
    return (
        <div>
             <DatePicker selected={selectedDate} onChange={setSelectedDate} inline/>
        </div>
    )
}

export default DateComponent
