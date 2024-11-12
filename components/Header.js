import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
        <Link href="/">
          <a>DAZE Modas</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link href="/products"><a>Produtos</a></Link></li>
          <li><Link href="/about"><a>Sobre Nós</a></Link></li>
          <li><Link href="/contact"><a>Contato</a></Link></li>
          <li><Link href="/cart"><a>Carrinho</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}

