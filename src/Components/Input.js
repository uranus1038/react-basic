import React ,{useState} from "react";

function Input({addPost})
{
    const [input , setInput] = useState('');

    function onChangex(e)
    {
        setInput(e.target.value);
    }
    function onKeyDownx(e)
    {
        const title =  e.target.value ;

        if(e.key == 'Enter' && title)
        {
            addPost(title);
            setInput('');
        }
    }

    return (
        <div>
            <div>create post</div>
            <input type="text" value={input} onChange={onChangex} onKeyDown={onKeyDownx}/>
        </div>
    );
}
export default Input ;  