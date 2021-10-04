import React,{useState} from 'react'
import DateComponent from './DateComponent'
import TimeSelector from './TimeSelector'
import styled from 'styled-components'
import Moment from 'react-moment';


const Page = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedTime, setSelectedTime] = useState("")
    
    return (
        <PageCom>
            <div className="container">
                <DateComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                <TimeSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
            </div>
            <div className="time"> Selected TIme : <Moment format="DD-MMM-YYYY">{selectedDate}</Moment> {selectedTime}</div>
        </PageCom>
    )
}

const PageCom = styled.h1`
.container{
    display: flex;
    justify-content: center;
}
.time{
    font-size: 1rem;
}

`

export default Page
