import React, { useEffect } from 'react';
import  PropTypes  from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/articles/actions';
import { Bars } from 'react-loader-spinner';

const MultiArticlesComponent = () => {
    
    const dispatch = useDispatch()
    const {posts,loadingPosts} = useSelector((state)=> state.ArticlesReducer)

     useEffect(()=>{
        dispatch(getPosts())
     },[])

     if(loadingPosts){
        return(
            <Container>
                <Bars
                height={100}
                width={100}>

                </Bars>
            </Container>
        )
     }
     
    return( 
        <Container>
        {posts.map(post=>{
            return(
                <Card className='px-4 py-2 mb-3'>
                    <Card.Title>
                        {post.title}
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                    </Card.Title>
                </Card>
            )
        })}
        </Container>
    )
};

// MultiArticleComponent.PropTypes = {};
// MultiArticleComponent.defaultProps = {};

export default MultiArticlesComponent;
