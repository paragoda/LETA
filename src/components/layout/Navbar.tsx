import { useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { TextButton } from '../common/Button'
import { Logo } from './Logo'
import { State } from '../../models'
import { Moon, Sun, UserIcon } from '../common'

type NavbarProps = {
  dark: State<boolean>
}

const Navbar = ({ dark }: NavbarProps) => {
  const { user } = useUser()

  // const signOut = async () => {
  //   const { supa } = await import('../../utils/supabase')
  //   supa.auth.signOut()
  // }

  return (
    <nav className='flex-none flex justify-between items-center py-5'>
      <Link href='/'>
        <div className='cursor-pointer mr-2'>
          <Logo />
        </div>
      </Link>

      {/* <Navlink href='/typing'>Type</Navlink> */}

      <Link href={user ? '/account' : '/auth'}>
        <TextButton><UserIcon /></TextButton>
      </Link>

      {/* {user
        ? <TextButton onClick={signOut}>Sign out</TextButton>
        : <Link href='/auth'>
          <TextButton>Start</TextButton>
        </Link>
      } */}

      <Link href='/create'>
        <TextButton>Create</TextButton>
      </Link>


      <TextButton onClick={() => dark.set(!dark.val)}>
        {dark.val ? <Sun /> : <Moon />}
      </TextButton>

      {/* <Navlink href='/guides'>Guides</Navlink> */}

      <a href='https://github.com/paragoda/leta/' target='_blank' rel='noopener noreferrer'>
        <TextButton>GitHub</TextButton>
      </a>

    </nav>
  )
}

export { Navbar }