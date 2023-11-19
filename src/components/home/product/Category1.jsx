import React from 'react'
const data = [
    {
        "id": 1,
        "name" : "Fashion",
        "color" : "#F1F2FD",
        "image" : require('../../../assets/icons/icon4.png')
    },
    {
        "id": 2,
        "name" : "Computing",
        "color" : "#FFF0FA",
        "image" : require('../../../assets/icons/icon5.png')
    },
    {
        "id": 3,
        "name" : "Electronics",
        "color" : "#FEF3F1",
        "image" : require('../../../assets/icons/icon2.png')
    },
    {
        "id": 4,
        "name" : "Furnitures",
        "color" : "#FAF2FC",
        "image" : require('../../../assets/icons/icon3.png')
    },
    {
        "id": 5,
        "name" : "Electronics",
        "color" : "#FEF3F1",
        "image" : require('../../../assets/icons/icon2.png')
    },
    {
        "id": 6,
        "name" : "Beauty",
        "color" : "#F0F8FF",
        "image" : require('../../../assets/icons/icon1.png')
    },
    {
        "id": 7,
        "name" : "Furnitures",
        "color" : "#FAF2FC",
        "image" : require('../../../assets/icons/icon3.png')
    },
    {
        "id": 8,
        "name" : "Electronics",
        "color" : "#FEF3F1",
        "image" : require('../../../assets/icons/icon2.png')
    },
    {
        "id": 9,
        "name" : "Beauty",
        "color" : "#F0F8FF",
        "image" : require('../../../assets/icons/icon1.png')
    },
    {
        "id": 10,
        "name" : "Electronics",
        "color" : "#FEF3F1",
        "image" : require('../../../assets/icons/icon2.png')
    },
    {
        "id": 11,
        "name" : "Beauty",
        "color" : "#F0F8FF",
        "image" : require('../../../assets/icons/icon4.png')
    },
    {
        "id": 12,
        "name" : "Computing",
        "color" : "#FFF0FA",
        "image" : require('../../../assets/icons/icon5.png')
    }
]

const Category1 = () => {
  return (
    <>
        <div className='um-product-caret flex py-2 sm:px-6 px-1 w-full gap-6 sm:overflow-hidden overflow-x-scroll'>
            {data.map((item) => {
                return (
                    <div className="um-category sm:py-0 py-6 gap-3" key={data.id}>
                        <div className="um-category-img sm:w-[183px] sm:h-[183px] w-[70px] h-[70px]" style={{background : `${item.color}`}}>
                            <img src={item.image} alt="" className='sm:w-full w-[40px]'/>
                        </div>

                        <h5 className='font-bold sm:text-md text-sm'>{item.name}</h5>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Category1