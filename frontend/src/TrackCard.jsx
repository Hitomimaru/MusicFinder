import React from 'react';
import { Card, CardContent, Typography, IconButton, Box, Avatar, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Логотипы сервисов
import spotifyLogo from '../assets/spotify.png';
import appleLogo from '../assets/apple.png';
import youtubeLogo from '../assets/youtube.png';

const serviceLogos = {
  'Spotify': spotifyLogo,
  'Apple': appleLogo,
  'Youtube': youtubeLogo,
};

function TrackCard({ track }) {
  console.log(track);

  const handleCopy = () => {
    navigator.clipboard.writeText(track.url);
  };

  const handleOpen = () => {
    window.open(track.url, '_blank');
  };

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'grey.900',
        color: 'white',
        borderRadius: 2,
        p: 1,
        mb: 2,
        maxWidth: 400,
      }}
    >
      {/* Логотип сервиса */}
      <Avatar
        src={serviceLogos[track.platform]}
        alt={track.service}
        sx={{ width: 56, height: 56, mr: 2 }}
      />

      {/* Информация о треке */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" noWrap>
          {track.name}
        </Typography>
        <Typography variant="body2" color="grey.400" noWrap>
          {track.artist}
        </Typography>
      </Box>

      {/* Кнопки */}
      <Box>
        <Tooltip title="Скопировать ссылку">
          <IconButton onClick={handleCopy} sx={{ color: 'white', p: 0.5 }}>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Открыть ссылку">
          <IconButton onClick={handleOpen} sx={{ color: 'white', p: 0.5 }}>
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}

export default TrackCard;
