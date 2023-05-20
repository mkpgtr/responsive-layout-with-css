import React from 'react'
import OtpInput from '../../components/OTP/OtpInput'

const OTPPage = () => {
    const handleSubmitOtp = (otp) => {
        // Handle the submitted OTP
        console.log('Submitted OTP:', otp);
      };
  return (
    <OtpInput numDigits={6} onSubmit={handleSubmitOtp} />
  )
}

export default OTPPage