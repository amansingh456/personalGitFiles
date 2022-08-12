import React from 'react'
// import "./style.css"

const Menucard = ({ data }) => {
    // console.log(data)
    const style = {
        subtitle : `card-number card-circle subtle`,
    }



    return (
        <>

        <section className='main-card--cointainer'>
            {
                data.map((curElem) => {

                    const{id, name, category, image, description} = curElem

                    return (
                        <div className='card-container' key={id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className={style.subtitle}>{id}</span>
                                    <span className='card-author subtle'>{name}</span>
                                    <h2 className='card-title'>{name}</h2>
                                    <span className='card-description subtle'>
                                        {description}
                                    </span>
                                    <div className='card-read '>Read</div>
                                </div>
                                <img src={image} alt=""  className='crad-media'/>
                                <span className='card-tag subtle'>0rderNow</span>
                            </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    );
};

export default Menucard;