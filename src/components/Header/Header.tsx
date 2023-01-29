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
      <div>links úteis</div>
      <div className="actions">
        <a>aa</a>
        <a>aa</a>
        <a>aa</a>
      </div>
    </div>
  </H.Wrapper>
)
