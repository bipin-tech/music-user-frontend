import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext);

  return track ? (
    <div className='w-[25%] h-[80%] flex flex-col gap-4 justify-between rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 fixed bottom-0 left-0'>
    <div className='p-4 flex items-center flex-col gap-4'>
        <img className='w-[100%] rounded-md' src={track.image} alt="" />
        <div>
            <p className='font-bold'>{track.name}</p>
            <p className='text-gray-400'>{track.desc.slice(0, 12)}</p>
        </div>
    </div>
    <div className='flex flex-col items-center gap-2 mt-4'>
        <div className='flex gap-4'>
            <img className='w-6 cursor-pointer hover:scale-110 transition-transform' src={assets.shuffle_icon} alt="Shuffle" />
            <img className='w-6 cursor-pointer hover:scale-110 transition-transform' onClick={previous} src={assets.prev_icon} alt="Previous" />
            {playStatus
                ? <img className='w-6 cursor-pointer hover:scale-110 transition-transform' onClick={pause} src={assets.pause_icon} alt="Pause" />
                : <img className='w-6 cursor-pointer hover:scale-110 transition-transform' onClick={play} src={assets.play_icon} alt="Play" />
            }
            <img className='w-6 cursor-pointer hover:scale-110 transition-transform' onClick={next} src={assets.next_icon} alt="Next" />
            <img className='w-6 cursor-pointer hover:scale-110 transition-transform' src={assets.loop_icon} alt="Loop" />
        </div>
        <div className='flex items-center gap-4'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div onClick={seekSong} ref={seekBg} className='w-full max-w-[500px] bg-gray-700 rounded-full cursor-pointer relative'>
                <div ref={seekBar} className='h-1 bg-green-500 rounded-full absolute top-0 left-0' style={{ width: `${seekSong}%` }} />
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
    </div>
    <div className='flex items-center gap-3 opacity-75 mt-4'>
        <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.plays_icon} alt="Plays" />
        <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.mic_icon} alt="Microphone" />
        <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.queue_icon} alt="Queue" />
        <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.speaker_icon} alt="Speaker" />
        <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.volume_icon} alt="Volume" />
        <div className='w-24 bg-gray-500 rounded-full cursor-pointer relative'>
            <div className='h-1 bg-white rounded-full absolute top-0 left-0' style={{ width: '50%' }} />
        </div>
        <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.mini_player_icon} alt="Mini Player" />
        <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.zoom_icon} alt="Zoom" />
    </div>
</div>
  )
  : null
}

export default Player
