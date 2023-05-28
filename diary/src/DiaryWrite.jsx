import { Link,useLocation } from 'react-router-dom';
import './App.css';
import Button from './button';
import React,{useState,useEffect} from 'react';
function DiaryWrite(props){
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [diaryList,setDiaryList]=useState("")
    const location = useLocation();
    const onChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const onChangeContent=(e)=>{
        setContent(e.target.value)
    }
    const addList=()=>{
        setDiaryList([
            ...diaryList,
            {
                title,
                content
            }
        ])
    }
    useEffect(()=>{
        setDiaryList(location.state)
        console.log(diaryList)

    },[])
    return(
        <div className="App">
            <header>
                <div>
                    <Button
                    text={"뒤로가기"}
                    type={"back"}
                    onClick={()=>{window.location.href="/"}}
                    /> 
                </div>
               
                <span className='centerText'>새 일기장</span>
            </header>
            <div>
                <div className='writeTitle'>
                    <label htmlFor="title">제목 : </label>
                    <input type='text' id="title" onChange={onChangeTitle}></input>
                </div>
                
                <textarea className='textArea' onChange={onChangeContent}></textarea>

                <div className="submitBt">
                    
                        <Button
                        text={"작성"}
                        type={"writeContent"}
                        onClick={addList}
                        >
                        <Link to={`/`}
                        state={{
                            diaryList
                        }}
                    />
                        </Button>
                    
                </div>
            </div>
        </div>
    )
}
 export default DiaryWrite;