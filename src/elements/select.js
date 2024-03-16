import React from 'react'
import Select from 'react-select';

export default function CustomSelect({ selectedOption, setSelectedOption, options }) {
  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  )
}
