import React, {useState} from 'react';

function BlogFilter({setSearchParams, postQuery, latest}) {

    const [search, setSearch] = useState(postQuery)
    const [checked, setChecked] = useState(latest)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const postQuery = form.search.value
        const isLatest = form.latest.checked
        const  params = {}
        if (postQuery.length) params.post = postQuery
        if (isLatest) params.latest = true
        setSearchParams(params)
    }
    return (
        <form autoComplete={'off'} onSubmit={handleSubmit}>
            <input type="search" name={'search'} value={search} onChange={(e) => setSearch(e.target.value)}/>
            <label style={{padding: '0 1rem'}}>
                <input type={"checkbox"} name={'latest'} value={checked} onChange={e => setChecked(e.target.checked)}/> New only
            </label>
            <input type={'submit'} value={'Search'}/>
        </form>
    );
}

export default BlogFilter;