import React from 'react';
import { Link } from "react-router-dom";
import './article.css';
import Pagination from './pagination/pagination';

const Article = () => {


    return(
        <div className = 'Article'>

            <h2 className = 'Article-title'>The Abused</h2>
            <p className = 'Article-content'>

                At first i submitted, i was getting 'old' so i wanted to learn the art of subservience as 
                i wanted to ensure this was my last time on the dating scene and finally be married.
                Then i got restless and at first started dodging, but when i realised that we shared
                 enough friends in lagos who could see me out and tell him, i decided not to hide it 
                 and just carry on with my social life and restricted it to hanging out and movies to
                  beat traffic and chilling in my friends' houses as against going to bars.
                Then the mental torture and abuse started for real. i He would call me all sorts of horrible
                 names, call me and my single friends old women who dont want to settle down. sometimes call
                  us prostitutes. oh he was creative with the name calling. i found myself feeling inadequate
                   and my confidence waning.

                Most weekends i'd fly into abuja( on my bill) just to make it work and When i went out with
                 him and he saw me talking to any one else, he would be cold and quiet and if i spoke to him,
                  he would snap.

            </p>
            <div className = 'Article-info'>
                <h5 className = 'Author'>Reemah</h5>
                <h6 className = 'Time'>15:03 WAT</h6>
                <h6 className = 'Date'>20 May 2020</h6>
            </div>

            <Link href = '' id= 'article-comment'>
                <i className="far fa-comment-dots"></i>
            </Link>

            <a href = '#' id = 'loader'>Load all articles.</a>

            <Pagination />
            
        </div>
    )
}

export default Article;