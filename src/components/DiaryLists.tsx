import { useEffect, useState } from "react";
import axios from 'axios';

type DiaryProps = {
    title : string,
    filter : string,
    content: string
}

const DiaryLists = () => {
    const [data, setData] = useState<DiaryProps[]>([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then(function(res){
            return res.data;
        })
        .then(function(data){
            setData(data);
        })
    },[])

    return(
        <section className='diary-list'>
            <ul>
                {
                    data && data.map((diary)=>(
                        <li>
                            <h3>{diary.title}</h3>
                            <p>{diary.content}</p>
                            <strong>{diary.filter}</strong>
                            <button type="button">삭제</button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default DiaryLists;