import React, { useState, useEffect } from 'react';
import {
  GalleryContainer,
  Card,
} from './style';
import InfiniteScroll from 'react-infinite-scroll-component';
import getPhotos from './getPhotos';
import CardInfo from 'pages-sections/Photos/CardInfo';
import CardImage from 'pages-sections/Photos/CardImage';

const Gallery = () => {
  const [pages, setPages] = useState(1);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(false)
  useEffect(() => {
    getPhotos(pages, setImages, setHasMore, setPages, setError);
  }, []);

  return (
    <GalleryContainer>
      <h1>Unsplash Gallery</h1>
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          getPhotos(pages, setImages, setHasMore, setPages, setError)
            .then(data => {return data})
            .catch(() => {setError(true)})
        }}
        hasMore={hasMore}
        loader={ 
          error ? <h4>Error Occured. Try again</h4> :
          <h4>Loading...</h4>
       }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {
            images.map((elem, index) => {
              return (
                <Card key={index} href="#">
                  <CardInfo user={elem.user}/>
                  <CardImage urls={elem.urls} />
                </Card>
              );
            })}
        </div>
      </InfiniteScroll>
    </GalleryContainer>
  );
};

export default Gallery;
