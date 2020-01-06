import React from 'react';

 function AllNews({title,description,urlToImage,url}) {
    return (
        <div>
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-xs-center flex-item">
        <div className="card-deck">
            <div className="card bg-success">
                <div className="card-body text-center">
                    <img
                        src={urlToImage}
                        className="img-fluid"
                        alt="No_Image_For_This_News_Article"
                    />
                    <a href={url}> 
                        <h5 className="text-white">{title}</h5>
                        </a>
                    
                    <p className="text-white">Description : {description}....</p>
                    
                    
                    <a href={url}> 
                    <button className='btn btn-dark'>View More Details</button>
                    </a>
                   
                </div>
            </div>
        </div>
    </div>
);
        </div>
    )
}
export default AllNews
