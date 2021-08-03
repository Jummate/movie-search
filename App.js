
import React,{useState} from 'react';
import {Box, Heading,Square, SimpleGrid} from '@chakra-ui/react';
import axios from 'axios';

import Header from './Header';
import Main from './Main';


function App() {
    const[query, setQuery] = useState('');
    const[result,setResult] = useState('');
    const[moviedetail, setMovieDetail] = useState('');
    
    const searchMovie = (movie,episode,series) => {
      movie = movie.map((content) => 
        < Square size={['150px','200px']} backgroundImage={`url(${content.Poster})`} color='white'>
             
                 {content.Title}
               </Square>
      )
      episode = episode.map((content) => {
        return <Square  size={['150px','200px']} backgroundImage={`url(${content.Poster})`} color='white'>
                 
                 {content.Title}
               </Square>
      })
      series = series.map((content) => {
        return <Square  size={['150px','200px']} backgroundImage={`url(${content.Poster})`} color='white'>
                 
                 {content.Title}
               </Square>
      })
      return <Box w='100%'>
                <Box mb={['20px','25px','30px']} minW='100%'>
                  <Heading as='h5'>Movie</Heading>
                  <SimpleGrid  columns={[2,null,3,5]} spacing='10px'>{movie}</SimpleGrid>
                </Box>
                <Box mb={['20px','25px','30px']} minW='100%'>
                  <Heading as='h5'>Episode</Heading>
                  <SimpleGrid  columns={[2,3,4,5]} spacing='10px'>{episode}</SimpleGrid>
                </Box>
                <Box mb={['20px','25px','30px']} minW='100%'>
                  <Heading as='h5'>Series</Heading>
                  <SimpleGrid  columns={[2,3,4,5]} spacing='10px'>{series}</SimpleGrid>
                </Box>
          </Box>
    }
    const handleChange = (event) => {
        setQuery(event.target.value);
    
        const url = 'https://www.omdbapi.com/?s='+query+'&apikey=27472284';
        axios
            .get(url)
            .then((response) => {
              let data = response.data.Search;
              setResult(data);
              let movieList = result.filter((content) => content.Type==='movie');
              let episodeList = result.filter((content) => content.Type==='episode');
              let seriesList = result.filter((content) => content.Type==='series');
              let detail = searchMovie(movieList, episodeList,seriesList);
              setMovieDetail(detail);
              
            })
            .catch((error) => {
              console.log(error)
            })

        
    }

    
  return (

    <Box h='100vh' bg='white'>
       
          <Header />
          <Main onChange={handleChange} detail={moviedetail}/>
        
    </Box>
  );
}

export default App;
