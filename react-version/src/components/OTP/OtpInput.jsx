import React,{useState,useEffect,useRef} from 'react'

const OtpInput = ({numDigits,onSubmit}) => {
    const [otp, setOtp] = useState(Array(numDigits).fill(''));
    const inputRefs = Array(numDigits)
      .fill(0)
      .map(() => useRef(null));
  
    const handleChange = (e, index) => {
      const value = e.target.value;
      if (isNaN(value)) return; // Allow only numeric input
  
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value.slice(-1); // Allow only single-digit input
        return newOtp;
      });
  
      if (value !== '') {
        if (index === numDigits - 1) {
          inputRefs[index].current.blur(); // Move focus to the next input field
          onSubmit(otp.join('')); // Submit the OTP when the last input field is filled
        } else {
          inputRefs[index + 1].current.focus(); // Move focus to the next input field
        }
      }
    };
  
    const handleKeyDown = (e, index) => {
      if (e.key === 'Backspace' && otp[index] === '') {
        inputRefs[index].current.blur(); // Move focus to the previous input field
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[index - 1] = ''; // Clear the previous input field
          return newOtp;
        });
        inputRefs[index - 1].current.focus(); // Move focus to the previous input field
      }
    };
  
    return (
      <div>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={inputRefs[index]}
          />
        ))}
      </div>
    );
}

export default OtpInput
