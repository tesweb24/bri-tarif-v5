import React, { useState } from 'react'
import { BiUser, BiLock, BiCreditCardAlt } from 'react-icons/bi'

import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'

import Image from 'next/image'

const SiteForm = ({jenis, btnClick}) => {

    const [data, setData] = useState({})

    const [showPaswword, setShowPaswword] = useState(false)

    const [disbledBtn, setDisbledBtn] = useState(true)

    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })

        if(e.target.value){
            setDisbledBtn(false)
        } else {
            setDisbledBtn(true)
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        btnClick(data)
    }
  return (
    <form onSubmit={handleClick}>
        <div style={{width:'100%', padding: '0 2em'}}>
            {
                jenis == 'norek' ?
                    <>
                        <div className="form-group" style={{marginBottom:20}}>
                            <input type="number" className='form-control' placeholder='No Rekening' onChange={handleChange} name="nomorrekening" required/>
                            <BiCreditCardAlt className='icon-control'/>
                        </div>
                    </>
                :
                    <>
                        <div className="form-group">
                            <input type="text" className='form-control' placeholder='Username' onChange={handleChange} name="username" required/>
                            <BiUser className='icon-control'/>
                        </div>
                        <div className="form-group">
                            <input type={showPaswword ? 'text' : 'password'} className='form-control' placeholder='Password' onChange={handleChange} name="password" required/>
                            <BiLock className='icon-control'/>
                            {
                                showPaswword ?
                                <RiEyeLine className='icon-control-pw' onClick={() => setShowPaswword(false)}/>
                                :
                                <RiEyeCloseLine className='icon-control-pw' onClick={() => setShowPaswword(true)}/>
                            }
                        </div>
                        <p className='text-password'>Lupa Password?</p>
                    </>
            }
        </div>
        <div style={{width:'100%', padding: '0 2em', display:'flex'}}>
            <button disabled={disbledBtn} type='submit' className='btn' id='btn' style={{marginTop:'-0.2em', cursor:'pointer', marginRight:4}}>
                {jenis == 'norek' ? 'Lanjut' : 'Login'}
            </button>
            {
                jenis == 'norek' ?
                <></>
                :
                <button type='button' style={{width:80, borderRadius: 9, border:'none', backgroundColor: 'rgb(14 120 202)', color:'white'}}>
                    <Image src="/fingerprint.png" width={80} height={80} alt="sidikjari"/>
                </button>
            }
        </div>
    </form>
  )
}

export default SiteForm