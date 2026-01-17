import React, { useState } from 'react';
import TrackCard from './TrackCard.jsx';
import axios from 'axios';
import { Box, TextField, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);

  const handleSearch = () => {
    console.log(query)
    axios.post('http://localhost:3000/api/tracks/search', {query})
      .then(response => {
        setTracks(response.data);
      })
      .catch(error => {
        console.error('Ошибка при поиске:', error);
      });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        bgcolor: 'black', // чёрный фон
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        component="form"
        onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '50px', // сильно закруглённый
          padding: '0.2rem 0.5rem',
          maxWidth: 400,
          width: '100%',
          bgcolor: 'grey.900',
        }}
        elevation={3}
      >
        <TextField
          variant="standard"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            flex: 1,
            input: { color: 'white', padding: '10px 12px' },
            '& .MuiInput-underline:before, & .MuiInput-underline:after': {
              borderBottom: 'none', // убираем линии MUI
            },
          }}
        />
        <IconButton
          type="submit"
          sx={{ color: 'white' }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box sx={{ width: '100%', maxWidth: 400, mt: 4, px: 2 }}>
        {tracks.map((track, index) => (
          <TrackCard key={index} track={track} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
