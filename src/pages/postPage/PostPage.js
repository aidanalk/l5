import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../../redux/PostSlice";

function PostPage() {

    const dispatch = useDispatch()
    const {title} = useSelector(state => state.postsReducer)

    const changeTitlePost = () => {
        dispatch(changeTitle())
    }

    return(
        <div>
            {/* <h1>title</h1>
            <button onChange={changeTitlePost}>change</button>
            <button onClick={() => dispatch(changeTitleParams('qwerty'))}>change title</button> */}

            <button onClick={() => dispatch(getPosts())}>get</button>
            <button>delete</button>
        </div>
    )
}

export default PostPage