import Link from 'next/link'
import Image from 'next/image'
import Brand from '../../../public/images/brand.svg'
import * as H from './styles'

export const Header = () => (
  <H.Wrapper>
    <div className="container">
      <Link href="./">
        <Image
          src={Brand}
          height={38}
          width={177}
          alt="Me Joga"
          title="Me Joga"
        />
      </Link>
      <form className="search">
        <input type="text" placeholder="Pesquisar na loja" />
        <button>
          <img src="./images/search.svg" />
        </button>
      </form>
      <div className="links">
        <Link className="link" href="">
          <img src="./images/info.svg" />
          <span>Sobre</span>
        </Link>
        <Link className="link" href="">
          <img src="./images/catalog.svg" />
          <span>Catálogo</span>
        </Link>
      </div>
      <div className="actions">
        <Link href="">
          <img src="./images/notification.svg" />
        </Link>
        <Link href="">
          <img src="./images/cart.svg" />
        </Link>
        <Link className="profile" href="">
          <div
            style={{ backgroundImage: `url(./images/profile.png)` }}
            className="profileImage"
          ></div>
        </Link>
      </div>
    </div>
  </H.Wrapper>
)
