import Image from 'next/image'
import Button from '../Button'
import Search from '../Search'
import NavigationMenu from './NavigationMenu'
import Link from 'next/link'

export default function Navigation() {
  return (
    <header className='nav'>
      <div className='nav__wrapper container--content'>
        <div className='nav__container'>
          <div className='nav__logo'>
            <Link href='/'>
              <Image
                src='/assets/images/oskari_logo_black_horizontal.svg'
                alt='Oskari Logo'
                width={200}
                height={90}
                priority={true}
              />
            </Link>
          </div>
          <div className='nav__search'>
            <Search />
          </div>
          <NavigationMenu />
          <div className='nav__cta'>
            <Button title='Download' variant='primary' />
          </div>
        </div>
      </div>
    </header>
  )
}
