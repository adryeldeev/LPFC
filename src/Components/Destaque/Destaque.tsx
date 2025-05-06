import React from 'react'


const Destaque:React.FC= () => {
  // const api = useApi()

  //   const fetchDestaques = async ()=>{
  //     try{
  //       const response = await api.get("/destaque")
  //       const data = response.data
  //       console.log(data)

  //     }catch{
  //       console.error("Erro ao buscar os destaques")

  //     }
       
  //   }
  //   useEffect(()=>{
  //     fetchDestaques()
  //   }
  //   ,[])

  return (
    
    <div className='destaque'>
      <h1>Destaques</h1>
      <div className='destaque-lista'>
        <div className='destaque-item'>
          <img src="https://via.placeholder.com/150" alt="Destaque 1" />
          <p>Destaque 1</p>
        </div>
        <div className='destaque-item'>
          <img src="https://via.placeholder.com/150" alt="Destaque 2" />
          <p>Destaque 2</p>
        </div>
        <div className='destaque-item'>
          <img src="https://via.placeholder.com/150" alt="Destaque 3" />
          <p>Destaque 3</p>
        </div>
      </div>
    </div>
  )
}

export default Destaque
