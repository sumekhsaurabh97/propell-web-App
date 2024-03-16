import React from 'react'

//style
import { inputBoxHeading, inputBoxEmpty } from '../styles/typography/typography'

export default function InputField({
  title,
  icon,
  placeholder,
  handleChange,
  type,
  value,
  maxLength,
  minLength,
  errorMessage,
  isError,
  onFocus,
  onBlur,
}) {
  return (
    <div>
      <p className={`text-purpleOne mb-[10px] ${inputBoxHeading}`}>
        {title}
      </p>
      {icon ? <div className="relative flex w-full mb-3">
        <span className="absolute">
          {icon.includes('.svg') ?
            <div>
              <img src={icon} alt='icon' />
            </div>
            :
            <p className={`text-blackOne px-[5px] ${inputBoxEmpty}`}>
              {icon}
            </p>
          }
        </span>
        <input
          maxLength={maxLength}
          minLength={minLength}
          className={`${inputBoxEmpty} px-[50px] w-full border-b-[1px] focus:border-b-[2px] pb-[15px] focus:outline-none  border-graySeven  placeholder-grayOne text-blackOne focus:border-blueOne`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div> :
        <input
          maxLength={maxLength}
          minLength={minLength}
          className={`${inputBoxEmpty} w-full border-b-[1px] focus:border-b-[2px] pb-[15px] focus:outline-none  border-graySeven  placeholder-grayOne text-blackOne focus:border-blueOne`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      }
    </div>
  )
}
