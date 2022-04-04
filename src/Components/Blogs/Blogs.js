import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='qna'>QNA</h1>
            <div className="blog">
                <h2>What is ContextApi ?</h2>
                <p>
                    <strong>Ans:</strong>
                    Getting data from parents to nester child by using props it's too dificult. Context api makes our development experience easyer. Props driling are a not good as a developer experience also for application. Context api set our data just like global variable .that's why we can get any global data by using useContext() and no need to send or recive props .we can pass any data as an value in context.provider .

                </p>
            </div>

            <div className="blog">
                <h2>What is the purpose of Semantic Elements?</h2>
                <p>
                    <strong>Ans:</strong>
                    Semantic tag are meningful , a semantic element clearly describes it's meaning for the browser and for the developer.
                    Elements likes 'header' , 'footer' and 'article' are all  semantic because they accurately describe the purpose of the tag and the type of content that is inside them. The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages. It has greater accessibility. It offers a better user experience.


                </p>
            </div>

            <div className="blog">
                <h2>Difference Betweeni Inline and block elements ?</h2>
                <p>
                    <strong>Ans:</strong>
                    Inline elements never start a new line for new element. Blocks element are start new line for new element. Inline tags get there width depends on there content but block element are get full width of the parent element. Inline elements can be block element by using CSS and block elements can be inline elements by using CSS. Inline elements accept only left and right margins and do not accept top and bottom margins but block elements accept all of margins.

                </p>
            </div>
        </div>
    );
};

export default Blogs;