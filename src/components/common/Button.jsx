import React from 'react'
import { Link } from 'react-router-dom'
import { Loader } from './buttonLoader'


export const Button = ({
  auth,
  className,
  name,
  link,
  isLoading,
  disabled,
  onClick,
  type
}) => {
  return (
    <div className='w-full'>
      {auth === 'button' ?
        <button type={type} onClick={onClick} className={`${disabled && 'opacity-90'}   ${className}`} disabled={disabled}>{isLoading ? <Loader /> : name}</button>
        :
        <Link className={className} to={link}>{name}</Link>
      }
    </div>
  )
}


export const PrimaryButton = ({
  classNameButton,
  type,
  link,
  name,
  click,
  isLoading
}) => {
  return (
    <div className='h-full w-full'>
      {type ?
        <button type="submit" onClick={click} className={`${classNameButton}`}>{isLoading ? <Loader /> : name}</button>
        :
        <Link className={`${classNameButton}`} to={link}>{name}</Link>
      }
    </div>
  )
}