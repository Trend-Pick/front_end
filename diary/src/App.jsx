import './App.css';
import Button from './button';
import DiaryList from './DiaryList';
import DiaryWrite from './DiaryWrite'
import React, {useState,useContext,useEffect,useRef} from 'react';

import {useNavigate, useParams, Link,useLocation} from 'react-router-dom';

function App({content,title}) {
    const location = useLocation();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [diaryList, setDiaryList] = useState([
        {
            id: 1,
            title: "오늘의 일기 1번",
            date: 1659698205892,
            content: ""
        }, {
            id: 2,
            title: "오늘의 일기 2번",
            date: 1659698205893,
            content: ""
        }, {
            id: 3,
            title: "오늘의 일기 3번",
            date: 1659698205894,
            content: ""
        }
    ])
    const id = useRef(4)
    useEffect(()=>{
        console.log(location.state!=null)
        
        if(location.state!=null){
            console.log(location.state)
            setDiaryList(location.state.diaryList)
        }
        
        
    },[])
    const increaseMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate())
        );
    }
    const decreaseMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())
        );
    }
    const headText = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`
   
    

    return (
        <div className="App">
            <header>
                <div>
                    <Button text={"◀"} type={"topLeft"} onClick={decreaseMonth}/>
                </div>
                <span className='centerText'>({headText})</span>
                <div>
                    <Button text={"▶"} type={"topRight"} onClick={increaseMonth}/>
                </div>
            </header>
            <div className='wrapper'>
                {
                    diaryList.map((r) => {
                        return (<DiaryList title={r.title} content={r.content} id={r.id}/>)
                    })
                }
            </div>

           
            <Link
                to={`DiaryWrite`}
                state={{
                    diaryList
                }}>
                <Button text={"+"} type={"writeBt"}/>
            </Link>
            

        </div>
    );
}

export default App;
