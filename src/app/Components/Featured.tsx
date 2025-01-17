"use client"
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    name: 'Fashion',
    icon: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=300&fit=crop&crop=faces&q=80',
    link: '/category/fashion'
  },
  {
    name: 'Electronics',
    icon: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=300&h=300&fit=crop&q=80',
    link: '/category/electronics'
  },
  {
    name: 'Bags',
    icon: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=300&h=300&fit=crop&q=80',
    link: '/category/bags'
  },
  {
    name: 'Footwear',
    icon: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop&q=80',
    link: '/category/footwear'
  },
  {
    name: 'Groceries',
    icon: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=300&fit=crop&q=80',
    link: '/category/groceries'
  },
  {
    name: 'Beauty',
    icon: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop&q=80',
    link: '/category/beauty'
  },
  {
    name: 'Wellness',
    icon: 'https://images.unsplash.com/photo-1517637382994-f02da38c6728?w=300&h=300&fit=crop&q=80',
    link: '/category/wellness'
  },
  {
    name: 'Jewellery',
    icon: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop&q=80',
    link: '/category/jewellery'
  }
]

const Featured = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 
                         animate-gradient-x">
            Featured Categories
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link 
              href={category.link} 
              key={category.name}
              className="flex flex-col items-center group transform hover:scale-105 transition-all duration-300 ease-out"
            >
              <div className="w-32 h-32 rounded-2xl bg-white flex items-center justify-center p-6 
                            shadow-lg group-hover:shadow-2xl transition-all duration-300
                            group-hover:bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50
                            border border-gray-100/50 backdrop-blur-sm">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300 ease-out"
                />
              </div>
              <span className="mt-5 text-base font-semibold text-gray-800 group-hover:text-purple-600 
                            transition-colors duration-300">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured
