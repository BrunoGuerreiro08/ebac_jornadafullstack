import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from "@mui/icons-material/MusicNote"

function VideoFooter() {
  return (
    <div className = "VideoFooter">
      <div className = "VideoFooter_text">
        <h3>@paulo_ebac</h3>
        <p>Descrição do vídeo </p>
        <div className="VideoFooter_music">
          <MusicNoteIcon/>
          <div className='VideoMusicFooter_text'>
            <p>Título da música</p>
          </div>
        </div>
      </div>
      <img 
        className="VideoFooter_record"
        alt = "Imagem de um vinil girando"
        src = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  )
}

export default VideoFooter