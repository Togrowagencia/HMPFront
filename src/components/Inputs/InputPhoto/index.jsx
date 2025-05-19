import React, {useState} from 'react'

const InputPhotoProfile = () => {

    const [imagePreview, setImagePreview] = useState('')
    const [imageFile, setImageFile] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageFile(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    return (
        <div className='flex w-[60px] relative'>
            <img src={imagePreview || `/svg/avatar/default.svg`} className="w-[46px] h-[46px] rounded-full object-center object-cover" />
            <label htmlFor="photoProfile" className='cursor-pointer absolute right-1 top-[-5px]'>
                <img src="/svg/avatar/upload.svg" className="w-[23px]" />
            </label>
            <input type="file" id='photoProfile' accept='image/*' className='hidden' onChange={handleImageChange}/>
        </div> 
  )
}

export default InputPhotoProfile