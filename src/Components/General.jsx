import React, {useEffect, useState} from 'react';
import AllNews from './AllNews';
import axios from 'axios';
 
 function General() {

     const [allNewsNow, setAllNewsNow] = useState([]); 
     const [search, setSearch] = useState(''); 
     const [query, setQuery] = useState(''); 
    // const request = ``
    useEffect(()=>{
        getAllNews();
    },[query])

    const getAllNews = () =>{
        // const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2020-01-04&to=2019-11-04&sortBy=popularity&apiKey=be1939fe6be743508bdf643a5f4708d0`)
        // const data = await response.json();
        // console.log(data.articles)
        // setAllNewsNow(data.articles);
        // console.log(allNewsNow)
        // fetch(`https://newsapi.org/v2/everything?q=${query}&from=2020-01-04&to=2019-11-04&sortBy=popularity&apiKey=be1939fe6be743508bdf643a5f4708d0`)
		// 	.then((res) => res.json())
		// 	.then((json) => {
        //         console.log(json.articles);
        //         setAllNewsNow(json.articles)
        //     });
            
            axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2020-01-04&to=2019-11-04&sortBy=popularity&apiKey=be1939fe6be743508bdf643a5f4708d0`)
             .then((res) => {
                 console.log(res.data.articles)
                setAllNewsNow(res.data.articles)
                } )

        
    }

    const upDateSearch = (e) =>{
      setSearch(e.target.value)
      console.log(search)
    }

    const getSearch = (e) =>{
        e.preventDefault();
        setQuery(search)
        setSearch('');
    }

    const allNewsNowShoe = allNewsNow.length? (
        allNewsNow.map((news)=>{
            return (
                <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-xs-center flex-item">
                    <div className="card-deck">
                        <div className="card bg-success">
                            <div className="card-body text-center" key={news.id}>
                                <img
                                    src={news.urlToImage}
                                    className="img-fluid"
                                    alt="currentlyNoimageForThisNews_Article"
                                />
                                <a href={news.url}> 
                                    <h5 className="text-white">{news.title}</h5>
                                    </a>
                                
                                <p className="text-white">Description : {news.description}....</p>
                                
                                
                                <a href={news.url}> 
                                <button className='btn btn-dark'>View More Details</button>
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
       

    ): (<div>
    
        <h3>{null}</h3> 
        
         </div>);
    return (
        <div className="app_general">
        <center>
        <form onSubmit={getSearch}  className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={upDateSearch}/> 
        <button className='search-button' type="submit">Search</button> 
        </form>
        </center>
          
           
            <div className="flex-item">
            {allNewsNowShoe}
            </div>
           
        </div>
    )
}

export default General;


