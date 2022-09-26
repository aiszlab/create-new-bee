import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      Home
      <button
        onClick={() => {
          navigate('/about')
        }}
      >
        前往about
      </button>
    </>
  )
}

export default Home
