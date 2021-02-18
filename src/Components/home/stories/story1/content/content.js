import React from 'react';
import './content.css';


const Content = () => {

    const [readMore, setReadMore] = React.useState(false);

    const linkName = readMore? 'Read More...' : 'Read Less...';

    const extraContent = <div>
        <p>
            Na so I see am oo Tunde.Na so I see am oo Tunde.
            Na so I see am oo Tunde.Na so I see am oo Tunde.
            Na so I see am oo Tunde.Na so I see am oo Tunde.
            Na so I see am oo Tunde.Na so I see am oo Tunde.
            Na so I see am oo Tunde.Na so I see am oo Tunde.
        </p>
    </div>

    return(
        <div className = 'Content'>
            <p id = 'content-p'>
                One day we went for his friend's party and when one of his friends talked to me all of 10 mins,
                he went into a jealous rage, poured the drink on the guy's head and stormed off, i apologised,
                chased after him and i jumped into the car, he sped off, going over speed bumps, screaming and
                shouting, abusing me, punching his windscreen, banging on the steering. All the red flags went
                up and i was very very angry and i was crying. i dont know where i got the strength from but
                i calmly told him to stop the car or i would.
                {readMore && extraContent}
            </p>
            <button id = 'more' onClick = {() => setReadMore(!readMore) }>{ linkName }</button>
        </div>
    )
}

export default Content;