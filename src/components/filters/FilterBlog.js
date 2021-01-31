import React, { useEffect, useState } from 'react';

import {
    useLocation
} from "react-router-dom";


export default function FilterBlog(props){

    const param = useQuery().get("search");
    const items = param ? param.split(',') : [];

    const [tags, setTags] = useState(items);
    const [newTag, setNewTag] = useState("");

    const filterCb = props.filterCb;

    useEffect(() => {filterCb(tags)}, [tags])

    function removeTag(id){
        const newList = tags.filter((t, index) => index !== id);
        updatePost(newList);
    }

    function addTag(tag){
        const newList = tags.slice();
        newList.push(tag);



        updatePost(newList);
    }

    function handleSubmit(e){
        e.preventDefault();
        addTag(newTag.value.toLowerCase());
        newTag.value = "";
    }

    function updatePost(newList){
        setTags(newList);

    }

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    return(
        <div>
            <form className="search" onSubmit={handleSubmit}>
                <input type="text" name="tag" id="tag" ref={(n) => setNewTag(n)} />
                <input type="submit" value="Add tag"/>
            </form>
            <ul className="tags edit">
                {tags.map((t, index) => {
                    return (
                        <li key={index} className="tag action" onClick={() => {removeTag(index)}}>
                            {t}
                        </li>
                    )
                })}
            </ul>

        </div>
    );

}