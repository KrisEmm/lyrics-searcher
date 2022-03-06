import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import { Info } from './components/Info';
import { Lyrics } from './components/Lyrics';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState({})
  const [lyrics, setLyrics] = useState('')
  const [songTitle, setSongTitle] = useState('')
  const [artistInfo, setArtistInfo] = useState({})
  useEffect(() => {
    if (Object.keys(search).length === 0) return
    setIsLoading(true)
    const getLyricsByAPI = async () => {
      const url_api_lyrics = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}`
      const url_api_info = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search.artist}`
      const requests = [
        fetch(url_api_lyrics),
        fetch(url_api_info)
      ]
      const responses = await Promise.all(requests)
      const [lyrics, info] = await Promise.all(responses.map(res => res.json()))

      setLyrics(lyrics.lyrics)
      setSongTitle(search.song)
      setArtistInfo(info.artists[0])
      setIsLoading(false)
      const goToRead = document.querySelector('#read')
      goToRead.scrollIntoView({ behavior: 'smooth' })
    }
    getLyricsByAPI()
  }, [search])
  return (
    <>
      <Form setSearch={setSearch} isLoading={isLoading} />
      <div className='container mt-5' id='read'>
        <div className='row mt-5' >
          <div className='col-md-6' >
            <Info info={artistInfo} />
          </div>
          <div className='col-md-6'>
            <Lyrics lyrics={lyrics} song={songTitle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
