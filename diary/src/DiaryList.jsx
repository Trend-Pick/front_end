const DiaryList=({content,id,title})=>{
    return(
        <div className='diaryList' key={id}>
            {title}
        </div>
    )
}

export default DiaryList;