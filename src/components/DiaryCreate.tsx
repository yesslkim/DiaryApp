const DiaryCreate = () => {
    return(
        <section className="diary-editor">
            <form action="/">
                <div>
                    <label htmlFor="diaryTitle">
                        제목
                    </label>
                    <input type="text" id='diaryTitle'/>
                </div>
                <div>
                    <label htmlFor="diaryFilter">
                        오늘의 기분
                    </label>
                    <select name="diaryFilter" id="diaryFilter">
                        <option value="1">⭐️</option>
                        <option value="2">⭐️⭐️</option>
                        <option value="3">⭐️⭐️⭐️</option>
                        <option value="4">⭐️⭐️⭐️⭐️</option>
                        <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="diaryContent" className='sr_only'>
                        내용
                    </label>
                    <textarea 
                        name="diaryContent" 
                        id="diaryContent" 
                        cols={30} 
                        rows={10}
                        placeholder='내용을 입력해 주세요'
                    >
                    </textarea>
                </div>
                <div>
                    <button type="submit">완료</button>
                </div>
            </form>
        </section>
    )
}

export default DiaryCreate